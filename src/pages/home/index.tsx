import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import EChartsComponent from '../../components/basic-chart';
import * as echarts from 'echarts';

const Home = () => {
  const ref = useRef(null);
  const option = {
    title: { text: '柱状图' },
    tooltip: {},
    xAxis: { data: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10],
      },
    ],
  };

  const option1 = {
    backgroundColor: 'transparent',
    //   title: {
    //     text: "多线图",
    //     textStyle: {
    //       align: "center",
    //       color: "#fff",
    //       fontSize: 20,
    //     },
    //     top: "5%",
    //     left: "center",
    //   },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)',
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)',
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)',
              },
            ],
            global: false,
          },
        },
      },
    },
    grid: {
      top: '5%',
      left: '10%',
      right: '10%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: true,
        },
        splitArea: {
          color: '#f00',
          lineStyle: {
            color: '#f00',
          },
        },
        axisLabel: {
          color: '#fff',
        },
        splitLine: {
          show: false,
        },
        boundaryGap: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
      },
    ],

    yAxis: [
      {
        type: 'value',
        min: 0,
        // splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
          },
        },
        axisLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          margin: 20,
          textStyle: {
            color: '#d1e6eb',
          },
        },
        axisTick: {
          show: true,
        },
      },
    ],
    series: [
      {
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 15,
        lineStyle: {
          normal: {
            color: '#00b3f4',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#00b3f4',
          },
        },
        itemStyle: {
          color: '#00b3f4',
          borderColor: '#fff',
          borderWidth: 3,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: true,
          // 设置tooltip背景颜色
          backgroundColor: '#001620',
          // 设置tooltip文字颜色
          textStyle: {
            color: '#fff',
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0,179,244,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,179,244,0)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(0,179,244, 0.9)',
            shadowBlur: 20,
          },
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      },
    ],
  };
  return (
    <div className="w-[500px] h-[500px] ">
      <EChartsComponent options={option1} ref={ref} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
