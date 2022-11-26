import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/formSlice/accountSlice";
import formSlice from "./slices/formSlice/formSlice";
import signUpSlice from "./slices/signUpSlice/signUpSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    signUp: signUpSlice,
    account: accountSlice,
  },
});
