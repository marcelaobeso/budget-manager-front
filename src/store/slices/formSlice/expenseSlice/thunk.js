import budgetApi from "../../../../api/budgetApi";
import { setAlert } from "../../alertSlice/alertSlice";
import { addAlert } from "../../alertSlice/thunk";
import { newNotDeletedExpenseList } from "./expenseSlice";

export const addedItem = () => {
  return async (dispatch, getState) => {
    const newAddedExpense = {
      ...getState().expense.expenseItem,
      idUser: getState().signUp.userInfo.idUser,
    };
    await budgetApi.post("/expense/newexpense", newAddedExpense);
    dispatch(getAllExpenses());
  };
};
export const editEvent = () => {
  return async (dispatch, getState) => {
    const newAddedExpense = {
      ...getState().expense.expenseItem,
      idUser: getState().signUp.userInfo.idUser,
    };
    console.log(newAddedExpense);
    try {
      await budgetApi.put(
        `/expense/${newAddedExpense.id_expense}`,
        newAddedExpense
      );
    } catch (error) {
      console.log(error);
      error.response.data.msg
        ? dispatch(setAlert(error.response.data.msg))
        : dispatch(
            setAlert(
              "unable to process this update now try deleting it and creating a new one"
            )
          );
      dispatch(addAlert());
    }

    dispatch(getAllExpenses());
  };
};

export const getAllExpenses = () => {
  return async (dispatch, getState) => {
    const { userInfo } = getState().signUp;
    const { data } = await budgetApi.get("/expense/expenses", {
      params: { idUser: userInfo.idUser },
    });
    data.expenses
      ? dispatch(newNotDeletedExpenseList(data.expenses))
      : dispatch(newNotDeletedExpenseList([]));
  };
};
