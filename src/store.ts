import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer, // RTK Query API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
