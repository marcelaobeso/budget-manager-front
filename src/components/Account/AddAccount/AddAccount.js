import React, { useState } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { accountForm } from "../../../store/slices/formSlice/formSlice";

export const AddAccount = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [accountName, setAccountName] = useState("");
  const dispatch = useDispatch();
  const accountNameHandler = (event) => {
    setAccountName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const currency = ["USD", "GTQ", "EUR", "CAD"];
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
  };

  return (
    <>
      <div>AddAccount</div>

      <br />
      <div className="new-expense__control">
        <label>Account Name</label>
        <input type="text" value={accountName} onChange={accountNameHandler} />
      </div>
      <br />
      <DropdownButton id="dropdown-currency" title="Type" variant="secondary">
        {type.map((item, index) => (
          <Dropdown.Item key={index} variant="dark">
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <DropdownButton
        id="dropdown-currency"
        title="Currency"
        variant="secondary"
      >
        {currency.map((item, index) => (
          <Dropdown.Item key={index} variant="dark">
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <div className="new-expense__control">
        <label>Balance</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <Button type="button" variant="dark" onClick={() => {}}>
        Add
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={ShowAddAccountHanddler}
      >
        Cancel
      </Button>
    </>
  );
};
