import React, { useEffect, useRef } from 'react';
import autofit from 'autofit.js';
import './App.css';
import EChartsComponent from './components/basic-chart';
import { get } from './request';

const App = () => {
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
  useEffect(() => {
    autofit.init({
      dh: 1080,
      dw: 1920,
      resize: true,
    });
  }, []);

  useEffect(() => {
    // 发送 GET 请求
    get('/user', { id: 1 }).then((res) => {
      console.log('User Info:', res);
    });
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <div className="w-[500px] h-[500px] bg-white">
        <EChartsComponent options={option} ref={ref}/>
      </div>
    </div>
  );
};

export default App;
