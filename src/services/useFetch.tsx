import { useEffect, useState } from 'react';
import { HomeFetchData } from '../specs/interfaces';

function useFetch(searchValue: string, canFetch: boolean) {
  const [data, setData] = useState<HomeFetchData | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (canFetch) {
      setData(null);
      setIsPending(true);
      setTimeout(() => {
        fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=32ec121da5203a172f81bed155b47664&text=${searchValue}&format=json&nojsoncallback=1`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
            setError(data.message);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          });
      }, 1000);
    }
  }, [canFetch, searchValue]);

  return { data, isPending, error };
}

export default useFetch;
