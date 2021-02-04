import { useEffect, useRef } from 'react';

function useComponentDidMount(callback) {
  const cbRef = useRef(callback);

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current();
    }
  }, []);
};

export default useComponentDidMount;