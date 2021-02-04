import { useEffect, useState } from 'react';

function useFetch(url = '', options = {}) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url, options)
        .then(res => res.json())
        .then(res => setResult(res))
        .catch(err => setError(err));
    }
  }, [url, options]);

  return [result, error];
};

export default useFetch;