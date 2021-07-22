
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { contactsReducer } from './contacts';
import { authReducer } from './auth';

const middleware = [...getDefaultMiddleware(), //logger
];

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;

