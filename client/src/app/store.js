import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from '../features/auth/authSlice';
import profileReducer from "../features/user/profileSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const profiePersistConfig = {
  key: "profile",
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer, profiePersistConfig, profileReducer);
const persistedprofileReducer = persistReducer(profiePersistConfig, profileReducer);
export const store = configureStore({
 
  reducer: {
    auth: persistedReducer,
    profile: persistedprofileReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);