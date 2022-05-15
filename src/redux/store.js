import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReduser from './contacts/contacts-reduser';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
