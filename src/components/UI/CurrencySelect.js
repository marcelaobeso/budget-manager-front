import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrencies } from "../../store/slices/formSlice/categorySlice/thunk";
import { addExpenseItem } from "../../store/slices/formSlice/expenseSlice/expenseSlice";

import { addNewAccountItem } from "../../store/slices/formSlice/formSlice";
export const CurrencySelect = () => {
  const { newAccountItem, showAddAccountForm, showAddExpenseForm } =
    useSelector((state) => state.form);
  const currencies = useSelector((store) => store.category.currencies);
  const expenseItem = useSelector((state) => state.expense.expenseItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCurrencies());
  }, []);
  const currencyChangeHandler = (event) => {
    if (showAddAccountForm) {
      dispatch(
        addNewAccountItem({
          ...newAccountItem,
          id_currency: event.target.value,
        })
      );
    }
    if (showAddExpenseForm) {
      dispatch(
        addExpenseItem({ ...expenseItem, id_currency: event.target.value })
      );
    }
  };

  return showAddExpenseForm ? (
    <div>
      <label>Currency</label>
      <select
        id="accountCurrency"
        value={expenseItem.id_currency}
        onChange={currencyChangeHandler}
      >
        {currencies.map((item, index) => (
          <option key={item.id_currency} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div>
      <label>Currency</label>
      <select
        id="accountCurrency"
        value={newAccountItem.id_currency}
        onChange={currencyChangeHandler}
      >
        {currencies.map((item, index) => (
          <option key={item.id_currency} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
