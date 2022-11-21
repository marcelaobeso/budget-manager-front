import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
  signup: false,
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    changeToLog: (state, action) => {
      //      state.signup = !state.signup;
      state.login = !state.login;
    },
    // changeToSign: (state, action) => {
    //   state.login = !state.login;
    // },
  },
});

export const { changeToLog, changeToSign } = logSlice.actions;

export default logSlice.reducer;
