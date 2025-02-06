import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import echarts, { ECOption } from './echarts-config';
import { EChartsType } from 'echarts/core';
import { useDeepCompareEffect } from 'ahooks';

/**
 * ref、props 类型定义
 */
export enum EChartsRendererType {
  svg = 'svg',
  canvas = 'canvas',
}

export type EChartsRef = {
  getEChartsInstance(): EChartsType | undefined;
};

export type EChartsProps = {
  options: any;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  renderer?: EChartsRendererType;
  loading?: boolean;
};

/**
 * 默认 props 值
 */
const defaultProps: EChartsProps = {
  options: {},
  height: '100%',
  width: '100%',
  renderer: EChartsRendererType.svg,
  loading: false,
};

/**
 * ForwardRef 函数组件
 * 注意外层传递 props 必须使用 useState() 进行控制。否则 React 每次渲染都会判定数据更新从而使 echart 重复初始化和闪烁。
 */
const EChartsWrapper: React.ForwardRefRenderFunction<EChartsRef, EChartsProps> = (
  props: EChartsProps = defaultProps,
  ref: ForwardedRef<EChartsRef>
) => {
  // echarts 挂载DOM节点
  const echartsRef = useRef<HTMLDivElement>(null);
  // echarts 实例
  const echartsInstance = useRef<EChartsType>();

  // 初始化 echarts (影响因素: props.options、ref)
  useDeepCompareEffect(() => {
    if (echartsRef.current) {
      // 每次都进行赋值，避免 echart 初次初始化失败导致无法后续判断错误无法进行初始化
      echartsInstance.current = echarts.getInstanceByDom(echartsRef.current);
      if (!echartsInstance.current) {
        echartsInstance.current = echarts.init(echartsRef.current, undefined, {
          renderer: props.renderer,
        });
      }
    }

    // 设置配置项
    if (props.options) echartsInstance.current?.setOption(props.options);

    return () => {
      // 容器销毁时，销毁实例避免内存溢出
      echartsInstance.current?.dispose();
    };
  }, [echartsRef, props.options]);

  // 防抖函数
  function debounce(func: any, delay: number) {
    let timerId: any;
    return function (...args: any[]) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        // @ts-ignore
        func.apply(this, args);
      }, delay);
    };
  }

  // 展示加载动画
  useDeepCompareEffect(() => {
    if (props.loading) {
      echartsInstance.current?.showLoading();
    } else {
      echartsInstance.current?.hideLoading();
    }
  }, [props.loading]);

  // 重新适配窗口，开启过渡动画
  const resize = () => {
    echartsInstance.current?.resize({
      animation: { duration: 300 },
    });
  };

  // 重新适配增加防抖处理
  const debounceResize = debounce(resize, 300);

  // 监听窗口大小执行重绘 (影响因素: props.options)
  useDeepCompareEffect(() => {
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [props.options]);

  // 监听窗口位置参数 (影响因素: props.height、props.width)
  useLayoutEffect(() => {
    debounceResize();
  }, [props.height, props.width]);

  useImperativeHandle(ref, () => ({
    // 将 echarts 实例暴露给父组件
    getEChartsInstance: () => {
      return echartsInstance.current;
    },
  }));

  return <div ref={echartsRef} className="echarts-wrapper overflow-hidden w-full h-full"></div>;
};

export default React.forwardRef(EChartsWrapper);
