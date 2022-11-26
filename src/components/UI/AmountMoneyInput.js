import { useDispatch, useSelector } from "react-redux";
import {
  accountBalanceValidator,
  addNewAccountItem,
} from "../../store/slices/formSlice/formSlice";

export const AmountMoneyInput = () => {
  const newAccountItem = useSelector((state) => state.form.newAccountItem);
  const dispatch = useDispatch();

  const amountChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      dispatch(accountBalanceValidator(false));
    }
    dispatch(
      addNewAccountItem({
        ...newAccountItem,
        balance: ++event.target.value,
      })
    );
  };
  return (
    <input
      type="number"
      min="0.01"
      step="0.01"
      value={newAccountItem.balance}
      onChange={amountChangeHandler}
    />
  );
};
