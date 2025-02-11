import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer from "./reducers"; // Import the root reducer
import { authApi } from "../services/authApi";
import { protectedApi } from "../services/protectedApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the combined reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(protectedApi.middleware),
});

export const persistor = persistStore(store);
export default store;
// Setup RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
