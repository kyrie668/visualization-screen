import React, { useEffect, useRef } from 'react';
import autofit from 'autofit.js';
import './App.css';
import EChartsComponent from './components/basic-chart';
import { get } from './request';
import Layout from './layout';

const App = () => {
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

  return <Layout></Layout>;
};

export default App;
