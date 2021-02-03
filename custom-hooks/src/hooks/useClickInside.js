import { useEffect } from 'react';

function useClickInside(ref, callback) {
  useEffect(() => {
    const elRef = ref.current;
    elRef.addEventListener('click', callback);
    return () => {
      elRef.removeEventListener('click', callback);
    }
  }, [ref, callback]);
};
export default useClickInside;
