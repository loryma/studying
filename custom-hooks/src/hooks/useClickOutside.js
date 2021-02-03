import { useEffect } from 'react';

function useClickOutside(ref, callback) {
  useEffect(() => {
    const elRef = ref.current;

    function clickCallback(e) {
      const target = e.target;
      let node;

      while (true) {
        if (elRef.isSameNode(target)) {
          return;
        }
        if (elRef.isSameNode(node) ) {
          return;
        }

        if (target.isSameNode(document)) {
          break;
        }

        if (node && node.isSameNode(document)) {
          break;
        }

        node = node ? node.parentNode : target.parentNode;
      }
      callback(e);
    };
    document.addEventListener('click', clickCallback);
    return () => {
      document.removeEventListener('click', clickCallback);
    }
  }, [ref, callback]);
};
export default useClickOutside;
