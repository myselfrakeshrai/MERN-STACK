import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi ({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://locahost:4000'}),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})