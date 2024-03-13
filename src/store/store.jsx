import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './loginSlice'
import artistReducer from './artistSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';

const persistConfig = {
  key: 'spotifyDetails',
  storage,
}
const reducer = combineReducers(
  {
    login: LoginReducer,
    artist: artistReducer,
  }

)
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      }
    }),
})