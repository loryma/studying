import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const currentRef = useRef();

  useEffect(() => {
    if (currentRef.current !== value) {
      currentRef.current = value;
    }
  }, [value]);
  
  return currentRef.current;
};

export default usePrevious;