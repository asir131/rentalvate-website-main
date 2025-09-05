import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRole: "",
  userInfo: null,
  isAuthenticated: false,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedRole: (state, action) => {
      state.selectedRole = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    clearUser: (state) => {
      state.selectedRole = "";
      state.userInfo = null;
      state.isAuthenticated = false;
      state.isSignedIn = false;
    },
  },
});

export const {
  setSelectedRole,
  setUserInfo,
  setIsSignedIn,
  setAuthenticated,
  clearUser,
} = userSlice.actions;
export default userSlice.reducer;
