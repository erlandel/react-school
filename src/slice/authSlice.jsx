import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    name: null,
    role: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.email = null;
      state.name = null;
      state.role = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setLogin: (state, action) => {
      const { email, name, role, isAuthenticated, error } = action.payload;
      state.email = email;
      state.name = name;
      state.role = role;
      state.isAuthenticated = isAuthenticated;
      state.error = error;   
      console.log(action.payload);   
    },
  },
});

export const { logout, setLogin } = authSlice.actions;
