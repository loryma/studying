import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const cbRef = useRef();

  useEffect(() => {
    if (cbRef.current !== callback) {
      cbRef.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    let intervalId;
    if (cbRef.current && Number.isInteger(delay)) {
      intervalId = setInterval(cbRef.current, delay);
    }

    return () => intervalId && clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;