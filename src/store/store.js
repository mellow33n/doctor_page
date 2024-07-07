import { configureStore } from '@reduxjs/toolkit';
import { middlewares } from './middlewares';
import scheduleSlice from './Reducers/scheduleSettingsSlice';

const reducer = {
  scheduleSlice,

};

export const store = configureStore({
  reducer,
  middleware: [...middlewares],
});
