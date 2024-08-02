import { configureStore } from '@reduxjs/toolkit';
import { patientSlice } from './api/patientApi';

export const store = configureStore({
  reducer: {
    [patientSlice.reducerPath]: patientSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientSlice.middleware),
});
