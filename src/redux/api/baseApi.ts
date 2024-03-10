import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['blogs'],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/blogs`,
      providesTags: ['blogs'],
    }),
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: '/blogs',
        method: 'POST',
        body: blogData,
      }),
      invalidatesTags: ['blogs'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogsQuery, useCreateBlogMutation } = baseApi;
