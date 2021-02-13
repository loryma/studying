import { useEffect, useState } from 'react';

function useFetch({url, options={}}) {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(res => setResponse(res))
      .catch(err => setError(err));
  }, [url]);

  return {response, error};
};

export default useFetch;