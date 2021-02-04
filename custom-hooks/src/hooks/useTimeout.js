import { useRef, useEffect } from 'react';

function useTimeout(callback, delay) {
  const cbRef = useRef();

  useEffect(() => {
    if (cbRef.current !== callback) {
      cbRef.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    let timeoutId;
    if (cbRef.current && Number.isInteger(delay)) {
      timeoutId = setTimeout(cbRef.current, delay);
    }

    return () => timeoutId && clearTimeout(timeoutId);
  }, [delay]);
};

export default useTimeout;