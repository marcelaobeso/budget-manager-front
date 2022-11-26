import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  showAddExpenseForm: false,
  showAddAccountForm: false,
  invalidAccountName: false,
  invalidAccountNumber: false,
  invalidAccountBalance: false,
  activateUpdate: false,
  newAccountItem: {
    id: 0,
    name: "",
    number: "",
    type: "General",
    currency: "USD",
    balance: "",
  },
  expensesList: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    transactionForm: (state, { payload }) => {
      state.showAddExpenseForm = payload;
    },
    accountForm: (state, { payload }) => {
      state.showAddAccountForm = payload;
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
      state.newAccountItem.currency = payload.currency;
      state.newAccountItem.balance = payload.balance;
      current(state.newAccountItem);
    },
    updateEnabler: (state, { payload }) => {
      state.activateUpdate = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  transactionForm,
  accountForm,
  accountNameValidator,
  accountNumberValidator,
  accountBalanceValidator,
  addNewAccountItem,
  appendItemToAccountList,
  updateEnabler,
} = formSlice.actions;

export default formSlice.reducer;
