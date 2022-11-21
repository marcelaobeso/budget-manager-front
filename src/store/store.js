import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice/formSlice";
import logSlice from "./slices/logSlice/logSlice";
import signUpSlice from "./slices/signUpSlice/signUpSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    log: logSlice,
    signUp: signUpSlice,
  },
});
