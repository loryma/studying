import { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
  const cbRef = useRef();

  useEffect(() => {
    if(cbRef.current !== callback) {
      cbRef.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    let timerId;

    if (cbRef.current && Number.isInteger(delay)) {
      timerId = setTimeout(cbRef.current, delay);
    }

    return () => clearTimeout(timerId);
  }, [delay])
};
export default useTimeout;