import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated",
  userId: null,
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpUser: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.username = payload.username;
      state.email = payload.email;
      state.password = payload.password;
      state.status = "authenticated";
    },
    logoutUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.username = "";
      state.email = "";
      state.password = "";
      state.status = "not-authenticated";
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser, logoutUser } = signUpSlice.actions;

export default signUpSlice.reducer;
