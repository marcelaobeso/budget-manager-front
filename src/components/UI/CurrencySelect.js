import { useDispatch, useSelector } from "react-redux";
import { addNewAccountItem } from "../../store/slices/formSlice/formSlice";
export const CurrencySelect = () => {
  const newAccountItem = useSelector((state) => state.form.newAccountItem);
  const dispatch = useDispatch();
  const currencyChangeHandler = (event) => {
    dispatch(
      addNewAccountItem({ ...newAccountItem, currency: event.target.value })
    );
  };
  const currency = ["USD", "GTQ", "EUR", "CAD"];
  return (
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
