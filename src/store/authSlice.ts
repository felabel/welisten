import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of our auth state
interface AuthState {
  user: any | null;
  token: string | null;
  isLoggedIn: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

// Export actions
export const { setUser, setToken, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
