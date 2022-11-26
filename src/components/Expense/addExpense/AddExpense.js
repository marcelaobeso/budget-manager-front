import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { transactionForm } from "../../../store/slices/formSlice/formSlice";
import { AmountMoneyInput } from "../../UI/AmountMoneyInput";
import { CurrencySelect } from "../../UI/CurrencySelect";

export const AddExpense = () => {
  const [expenseType, setExpenseType] = useState("");
  const [expenseAccount, setExpenseAccount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const dispatch = useDispatch();
  // collects the type of expense and asigns the state in const
  const valueTypeHandler = (event) => {
    setExpenseType(event);
  };

  const valueAccountHandler = (event) => {
    const account = Number(event.target.text.split(" ").shift());
    setExpenseAccount(account);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const showAddExpenseHanddler = () => {
    dispatch(transactionForm(false));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const accounts = [
    { type: "savings", number: 542345134 },
    { type: "checking", number: 1341234 },
  ];

  const category = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];

  return (
    <Form onSubmit={submitHandler}>
      <div>AddExpense</div>
      <br />
      {/* Expense type radio button selector  */}
      <ToggleButtonGroup type="radio" name="Type" onChange={valueTypeHandler}>
        <ToggleButton id="Income" value="Income" variant="outline-success">
          Income
        </ToggleButton>
        <ToggleButton id="Expense" value="Expense" variant="outline-danger">
          Expense
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />
      {/* Account selection dropdown */}
      <DropdownButton id="dropdown-account" title="Account" variant="secondary">
        {accounts.map((item, index) => (
          <Dropdown.Item
            key={index}
            variant="dark"
            onClick={valueAccountHandler}
            value={item.number}
          >
            {item.number} | {item.type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />

      <div className="new-expense__control">
        <label>Amount</label>
        <AmountMoneyInput />
      </div>
      <br />
      <CurrencySelect />
      <br />
      <DropdownButton
        id="dropdown-category"
        title="Category"
        variant="secondary"
      >
        {category.map((item, index) => (
          <Dropdown.Item key={index} variant="dark">
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2018-01-01"
          max="2025-01-01"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <br />
      <Button type="button" variant="dark" onClick={() => {}}>
        Add
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={showAddExpenseHanddler}
      >
        Cancel
      </Button>
    </Form>
  );
};
