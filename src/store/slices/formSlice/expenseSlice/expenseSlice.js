import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  expenseItem: {
    id: 1,
    expenseType: "",
    account: "",
    amount: "",
    currency: "USD",
    category: "",
    date: "",
    description: "",
    showDescription: false,
  },
  expenseList: [
    {
      id: 0,
      expenseType: "Expense",
      account: "9345693",
      amount: "345",
      currency: "EUR",
      category: "Housing",
      date: "2022-11-23",
      description: "sdgdfgsdfg",
      showDescription: false,
    },
  ],
  invalidExpenseType: false,
  invalidAccount: false,
  invalidCategory: false,
  invalidDate: false,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseItem: (state, { payload }) => {
      state.expenseItem.id = payload.id;
      state.expenseItem.expenseType = payload.expenseType;
      state.expenseItem.account = payload.account;
      state.expenseItem.amount = payload.amount;
      state.expenseItem.currency = payload.currency;
      state.expenseItem.category = payload.category;
      state.expenseItem.date = payload.date;
      state.expenseItem.description = payload.description;
    },
    appendItemToExpenseList: (state, action) => {
      state.expenseList.push(action.payload);
    },
    newNotDeletedExpenseList: (state, { payload }) => {
      state.expenseList = payload;
    },
    expenseTypeValidator: (state, { payload }) => {
      state.invalidExpenseType = payload;
    },
    accountValidator: (state, { payload }) => {
      state.invalidAccount = payload;
    },
    categoryValidator: (state, { payload }) => {
      state.invalidCategory = payload;
    },
    dateValidator: (state, { payload }) => {
      state.invalidDate = payload;
    },
    showDescriptionEnabler: (state, { payload }) => {
      state.expenseList[payload].showDescription =
        !state.expenseList[payload].showDescription;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  appendItemToExpenseList,
  addExpenseItem,
  newNotDeletedExpenseList,
  expenseTypeValidator,
  accountValidator,
  categoryValidator,
  dateValidator,
  showDescriptionEnabler,
} = expenseSlice.actions;

export default expenseSlice.reducer;
