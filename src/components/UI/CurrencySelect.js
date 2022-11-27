import { useDispatch, useSelector } from "react-redux";
import { addExpenseItem } from "../../store/slices/formSlice/expenseSlice/expenseSlice";

import { addNewAccountItem } from "../../store/slices/formSlice/formSlice";
export const CurrencySelect = () => {
  const { newAccountItem, showAddAccountForm, showAddExpenseForm } =
    useSelector((state) => state.form);
  const expenseItem = useSelector((state) => state.expense.expenseItem);
  const dispatch = useDispatch();
  const currencyChangeHandler = (event) => {
    if (showAddAccountForm) {
      dispatch(
        addNewAccountItem({ ...newAccountItem, currency: event.target.value })
      );
    }
    if (showAddExpenseForm) {
      dispatch(
        addExpenseItem({ ...expenseItem, currency: event.target.value })
      );
    }
  };
  const currency = ["USD", "GTQ", "EUR", "CAD"];
  return showAddExpenseForm ? (
    <div>
      <label>Currency</label>
      <select
        id="accountCurrency"
        value={expenseItem.currency}
        onChange={currencyChangeHandler}
      >
        {currency.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div>
      <label>Currency</label>
      <select
        id="accountCurrency"
        value={newAccountItem.currency}
        onChange={currencyChangeHandler}
      >
        {currency.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
