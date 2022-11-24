import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddExpenseForm: false,
  showAddAccountForm: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    transactionForm: (state) => {
      state.showAddExpenseForm = !state.showAddExpenseForm;
    },
    accountForm: (state, { payload }) => {
      state.showAddAccountForm = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { transactionForm, accountForm } = formSlice.actions;

export default formSlice.reducer;
