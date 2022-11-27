import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  accountList: [
    {
      id: 0,
      name: "miaw, miaw",
      number: 9345693,
      type: "Current Account",
      currency: "GTQ",
      balance: 234,
    },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    appendItemToAccountList: (state, action) => {
      state.accountList.push(action.payload);
    },
    newNotDeletedAccountList: (state, { payload }) => {
      state.accountList = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { appendItemToAccountList, newNotDeletedAccountList } =
  accountSlice.actions;

export default accountSlice.reducer;
