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
          `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=30&client_id=D7eXntUfsJytP5zP1_2ZA7MHqJ-43XOGbpeXVaCRVoU`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
            setError(data.errors ? data.errors[0] : null);
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
