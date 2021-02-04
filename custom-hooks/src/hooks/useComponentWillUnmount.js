import { useEffect, useRef } from 'react';

function useComponentWillUnmount(callback) {
  const cbRef = useRef(callback);

  useEffect(() => {
    const cb = cbRef.current;
    return () => cb && cb();
  }, []);
};

export default useComponentWillUnmount;