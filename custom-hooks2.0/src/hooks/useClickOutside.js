import { useEffect } from 'react';

function useClickOutside(ref, cb) {
  function callback(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  }

  useEffect(() => {
    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, []);
};
export default useClickOutside;