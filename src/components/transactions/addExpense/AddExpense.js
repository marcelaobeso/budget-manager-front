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

export const AddExpense = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowform] = useState(false);

  const dispatch = useDispatch();

  const formHandler = () => {
    setShowform((prevState) => {
      setShowform(!prevState);
    });
  };
  const valueHanddler = (event) => {
    console.log(event);
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
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
    formHandler();
  };
  const accounts = [
    { type: "savings", number: 542345134 },
    { type: "checking", number: 1341234 },
  ];

  const currency = ["USD", "GTQ", "EUR", "CAD"];

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
      <ToggleButtonGroup type="radio" name="type" onChange={valueHanddler}>
        <ToggleButton id="Income" value="Income" variant="outline-success">
          Income
        </ToggleButton>
        <ToggleButton id="Expense" value="Expense" variant="outline-danger">
          Expense
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />
      <DropdownButton id="dropdown-account" title="Account" variant="secondary">
        {accounts.map((item, index) => (
          <Dropdown.Item key={index} variant="dark">
            {item.number}, {item.type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />

      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
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
      <Button type="button" variant="dark" onClick={formHandler}>
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
