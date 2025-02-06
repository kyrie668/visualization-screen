import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

const Weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

const TimeComponent = () => {
  // 年月日
  const [date, setDate] = useState('');
  // 星期
  const [day, setDay] = useState('');
  // 时分
  const [time, setTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      setDate(now.format('YYYY-MM-DD'));
      setTime(now.format('HH:mm'));
      // 获取是一个星期的第几天
      const weekday = now.day();
      setDay(Weekdays[weekday]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-2 text-[#00ffff] items-center flex-1">
      <span className="text-[48px] font-bold">{time}</span>
      <div className="flex flex-col text-sm gap-1">
        <span className="font-[200] text-[16px]">{date}</span>
        <span className="font-[400] text-[18px]">{day}</span>
      </div>
    </div>
  );
};

TimeComponent.propTypes = {};

export default TimeComponent;
