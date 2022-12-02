import budgetApi from "../../../../api/budgetApi";
import {
  appendItemToExpenseList,
  newNotDeletedExpenseList,
} from "./expenseSlice";

export const addedItem = () => {
  return (dispatch, getState) => {
    const newAddedExpense = getState().expense.expenseItem;
    dispatch(appendItemToExpenseList(newAddedExpense));
  };
};
export const getAllExpenses = () => {
  return async (dispatch, getState) => {
    const { userInfo } = getState().signUp;
    const { data } = await budgetApi.get("/expense/expenses", {
      params: { idUser: userInfo.idUser },
    });
    console.log(data);
    dispatch(newNotDeletedExpenseList(data.expenses));
  };
};
