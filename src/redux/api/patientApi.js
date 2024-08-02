import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientSlice = createApi({
  reducerPath: 'patient',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fedskillstest.coalitiontechnologies.workers.dev',
    prepareHeaders: (headers) => {
      const username = 'coalition';
      const password = 'skills-test';
      headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPatientData: builder.query({
      query: () => '/patients',
    }),
  }),
});

export const { useGetPatientDataQuery } = patientSlice;
