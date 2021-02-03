import { useRef, useEffect, useState } from 'react';

function usePrevious(current) {
  const [prev, setPrev] = useState(null);
  const currentRef = useRef(null);

  useEffect(() => {
    if (current !== currentRef.current) {
      setPrev(currentRef.current);
      currentRef.current = current;
    }
  }, [current]);

  return prev;
};

export default usePrevious;