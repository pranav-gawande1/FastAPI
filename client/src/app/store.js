import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from '../features/auth/authSlice';
import profileReducer from "../features/user/profileSlice";
import cartReducer from "../features/Cart/cartSlice"

const persistConfig = {
  key: "auth",
  storage,
};

const profiePersistConfig = {
  key: "profile",
  storage
}

const cartPersistConfig = {
  key: "cart",
  storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedprofileReducer = persistReducer(profiePersistConfig, profileReducer);
const persistedcartReducer = persistReducer(cartPersistConfig, cartReducer);
export const store = configureStore({

  reducer: {
    auth: persistedReducer,
    profile: persistedprofileReducer,
    cart: persistedcartReducer
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