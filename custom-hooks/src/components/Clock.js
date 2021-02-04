import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

function Clock() {
  const [time, setTime] = useState();

  const intervalCallback = () => {
    setTime(new Date().toString());
  };

  useInterval(intervalCallback, 1000);

  return (
    <div>
      Time now: {time}
    </div>
  );
};

export default Clock;