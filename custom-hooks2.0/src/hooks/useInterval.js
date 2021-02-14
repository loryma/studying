import { useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const cbRef = useRef();

  useEffect(() => {
    if ( cbRef.current !== callback ) {
      cbRef.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    let intervalId;

    if (cbRef.current && Number.isInteger(delay)) {
      setInterval(cbRef.current, delay);
    }

    return () => clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;