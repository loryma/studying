import { useEffect } from 'react';

function useClickInside(ref, cb) {
  function callback(e) {
    if (ref.current && ref.current.contains(e.target)) {
      cb();
    }
  }

  useEffect(() => {
    const elRef = ref.current;
    if (elRef) {
      elRef.addEventListener('click', callback);
    }

    return () => elRef && elRef.removeEventListener('click', callback);
  }, []);

};

export default useClickInside;