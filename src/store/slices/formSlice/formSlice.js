import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  username: "",
  password: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser } = formSlice.actions;

export default formSlice.reducer;
