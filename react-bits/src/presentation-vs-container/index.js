import React, { useEffect, useState, useRef } from 'react';
import Clock from './Clock';

function ClockContainer ({ time }) {
  const [timeState, setTimeState] = useState(time);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(updateTime, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const updateTime = () => {
    setTimeState(state => new Date(state.getTime() + 1000));
  }

  const extract = time => ({
    hours: time.getHours(), 
    minutes: time.getMinutes(),
    seconds: time.getSeconds()
  });

  return (
    <Clock {...extract(timeState)} />
  )
};

export default ClockContainer;