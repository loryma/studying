import useComponentDidMount from "./useComponentDidMount";

import { useEffect } from 'react';

function useComponentWillUnmount(callback) {
  useEffect(() => {
    return callback && callback();
  }, []);
};

export default useComponentWillUnmount;