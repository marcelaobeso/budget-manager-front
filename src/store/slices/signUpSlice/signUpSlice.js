import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  username: "",
  password: "",
  email: "",
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser } = signUpSlice.actions;

export default signUpSlice.reducer;
