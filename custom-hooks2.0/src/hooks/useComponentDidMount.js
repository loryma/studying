import { useEffect }  from 'react';

function useComponentDidMount(callback) {
  useEffect(() => {
    callback();
  }, []);
};

export default useComponentDidMount;