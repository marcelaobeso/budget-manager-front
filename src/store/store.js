import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice/formSlice";
import signUpSlice from "./slices/signUpSlice/signUpSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    signUp: signUpSlice,
  },
});
