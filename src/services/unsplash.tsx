import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomeFetchData } from '../specs/interfaces';

export const unsplashApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/search/' }),
  endpoints: (builder) => ({
    getUnsplashDataByQuery: builder.query<HomeFetchData, string>({
      query: (query) =>
        `photos?query=${
          query ? query : 'random'
        }&per_page=30&client_id=D7eXntUfsJytP5zP1_2ZA7MHqJ-43XOGbpeXVaCRVoU`,
    }),
  }),
});

export const { useGetUnsplashDataByQueryQuery } = unsplashApi;
