import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newNotDeletedAccountList } from "../../../store/slices/formSlice/accountSlice/accountSlice";
import addedItem from "../../../store/slices/formSlice/accountSlice/thunk";
import {
  accountBalanceValidator,
  accountForm,
  accountNameValidator,
  accountNumberValidator,
  addNewAccountItem,
  updateEnabler,
} from "../../../store/slices/formSlice/formSlice";

import { AmountMoneyInput } from "../../UI/AmountMoneyInput";
import { CurrencySelect } from "../../UI/CurrencySelect";
import styles from "./AddAccount.module.css";

export const AddAccount = () => {
  const [disableAccountNumber, setDisableAccountNumber] = useState(false);

  const dispatch = useDispatch();
  const accountList = useSelector((store) => store.account.accountList);
  const {
    newAccountItem,
    invalidAccountName,
    invalidAccountNumber,
    invalidAccountBalance,
    activateUpdate,
  } = useSelector((state) => state.form);

  const accountNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      dispatch(accountNameValidator(false));
    }
    dispatch(
      addNewAccountItem({ ...newAccountItem, name: event.target.value })
    );
  };

  const typeChangeHandler = (event) => {
    dispatch(
      addNewAccountItem({ ...newAccountItem, type: event.target.value })
    );
  };
  const enteredAccountNumberHandler = (event) => {
    if (event.target.value.length > 0) {
      dispatch(accountNumberValidator(false));
    }
    dispatch(
      addNewAccountItem({
        ...newAccountItem,
        number: parseInt(event.target.value),
      })
    );
    //   setEnteredAccountNumber(event.target.value);
  };

  useEffect(() => {
    if (newAccountItem.type === "Cash") {
      setDisableAccountNumber(true);
      dispatch(addNewAccountItem({ ...newAccountItem, number: "" }));
      dispatch(accountNumberValidator(false));
      return;
    } else {
      setDisableAccountNumber(false);
      dispatch(addNewAccountItem({ ...newAccountItem, number: "" }));
      return;
    }
  }, [newAccountItem.type]);
  const type = [
    "General",
    "Cash",
    "Current Account",
    "Credit Card",
    "Account with Overdraft",
    "Saving Account",
    "Bonus",
    "Insurance",
    "Investment",
    "Loan",
    "Mortgage",
  ];
  const ShowAddAccountHanddler = () => {
    dispatch(accountForm(false));
    dispatch(accountNameValidator(false));
    dispatch(accountNumberValidator(false));
    dispatch(accountBalanceValidator(false));
    dispatch(updateEnabler(false));
    const accountItem = {
      ...newAccountItem,
      name: "",
      number: 0,
      type: "General",
      currency: "USD",
      balance: "",
    };
    dispatch(addNewAccountItem(accountItem));
  };
  const AddAccountSubmitHandler = (event) => {
    event.preventDefault();
    if (
      newAccountItem.name.trim().length === 0 ||
      (newAccountItem.number.length === 0 && newAccountItem.type !== "Cash") ||
      newAccountItem.balance.length === 0
    ) {
      if (newAccountItem.name.trim().length === 0) {
        dispatch(accountNameValidator(true));
        dispatch(addNewAccountItem({ ...newAccountItem, name: "" }));
      }
      if (newAccountItem.number.length === 0) {
        dispatch(accountNumberValidator(true));
      }

      if (newAccountItem.balance.length === 0) {
        dispatch(accountBalanceValidator(true));
      }
      return;
    }
    if (activateUpdate) {
      let notUpdatedAccounts = accountList.filter(
        (item) => item.id !== newAccountItem.id
      );
      dispatch(newNotDeletedAccountList(notUpdatedAccounts));
      dispatch(addedItem());

      const accountItem = {
        id: newAccountItem.id,
        name: "",
        number: "",
        type: "General",
        currency: "USD",
        balance: "",
      };
      dispatch(addNewAccountItem(accountItem));
      dispatch(updateEnabler(false));
    } else {
      dispatch(
        addNewAccountItem({ ...newAccountItem, id: newAccountItem.id + 1 })
      );
      dispatch(addedItem());
      const accountItem = {
        id: newAccountItem.id + 1,
        name: "",
        number: "",
        type: "General",
        currency: "USD",
        balance: "",
      };
      dispatch(addNewAccountItem(accountItem));
    }
    dispatch(accountForm(false));
  };

  return (
    <>
      <form onSubmit={AddAccountSubmitHandler}>
        <div>AddAccount</div>
        <br />
        {/*Account name, regular text input  */}
        <div
          className={`${styles["form-control"]} ${
            invalidAccountName && styles.invalid
          }`}
        >
          <label>Account Name</label>
          <input
            type="text"
            value={newAccountItem.name}
            onChange={accountNameHandler}
          />
        </div>
        <br />

        {/* Account type selector, dropdown list with preseted values */}
        <label>Type</label>
        <select
          id="typeOfAccount"
          value={newAccountItem.type}
          onChange={typeChangeHandler}
        >
          {type.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <br />
        {/* Account number, regular number input */}
        <div
          className={`${styles["form-control"]} ${
            invalidAccountNumber && styles.invalid
          }`}
        >
          <label>Account number</label>
          <input
            type="number"
            value={newAccountItem.number}
            onChange={enteredAccountNumberHandler}
            disabled={disableAccountNumber}
          />
        </div>

        <br />
        {/* Currency for account selector, dropdown list with preseted values */}
        <br />
        <CurrencySelect />
        <br />
        <div
          className={`${styles["form-control"]} ${
            invalidAccountBalance && styles.invalid
          }`}
        >
          <label>Balance</label>
          <AmountMoneyInput />
        </div>
        {!activateUpdate ? (
          <Button type="submit" variant="dark">
            Add
          </Button>
        ) : (
          <Button type="submit" variant="dark">
            Save
          </Button>
        )}

        <Button
          type="button"
          variant="secondary"
          onClick={ShowAddAccountHanddler}
        >
          Cancel
        </Button>
      </form>
    </>
  );
};
