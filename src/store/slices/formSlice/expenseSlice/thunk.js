import { appendItemToExpenseList } from "./expenseSlice";

const addedItem = () => {
  return (dispatch, getState) => {
    // const replacedColor = {
    // 	id: 0,
    // 	name: '',
    // };

    const newAddedExpense = getState().expense.expenseItem;
    console.log(newAddedExpense);
    dispatch(appendItemToExpenseList(newAddedExpense));
  };
};
export default addedItem;
