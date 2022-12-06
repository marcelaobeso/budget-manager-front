import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  invalidAccountName: false,
  invalidAccountNumber: false,
  invalidAccountBalance: false,
  newAccountItem: {
    id: 0,
    name: "",
    number: "",
    type: "General",
    id_currency: "USD",
    balance: "",
  },
  accountList: [
    {
      id: 0,
      name: "miaw, miaw",
      number: 9345693,
      type: "Current Account",
      id_currency: "GTQ",
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
    accountNameValidator: (state, { payload }) => {
      state.invalidAccountName = payload;
    },
    accountNumberValidator: (state, { payload }) => {
      state.invalidAccountNumber = payload;
    },
    accountBalanceValidator: (state, { payload }) => {
      state.invalidAccountBalance = payload;
    },
    addNewAccountItem: (state, { payload }) => {
      state.newAccountItem.id = payload.id;
      state.newAccountItem.name = payload.name;
      state.newAccountItem.number = payload.number;
      state.newAccountItem.type = payload.type;
      state.newAccountItem.id_currency = payload.id_currency;
      state.newAccountItem.balance = payload.balance;
      current(state.newAccountItem);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  appendItemToAccountList,
  newNotDeletedAccountList,
  accountNameValidator,
  accountNumberValidator,
  accountBalanceValidator,
  addNewAccountItem,
} = accountSlice.actions;

export default accountSlice.reducer;
