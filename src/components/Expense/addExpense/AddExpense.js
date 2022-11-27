import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  accountValidator,
  addExpenseItem,
  categoryValidator,
  dateValidator,
  expenseTypeValidator,
  newNotDeletedExpenseList,
} from "../../../store/slices/formSlice/expenseSlice/expenseSlice";
import {
  accountBalanceValidator,
  transactionForm,
  updateEnabler,
} from "../../../store/slices/formSlice/formSlice";
import addedItem from "../../../store/slices/formSlice/expenseSlice/thunk";
import { AmountMoneyInput } from "../../UI/AmountMoneyInput";
import { CurrencySelect } from "../../UI/CurrencySelect";
import styles from "./AddExpense.module.css";

export const AddExpense = () => {
  const dispatch = useDispatch();
  const {
    expenseItem,
    invalidExpenseType,
    invalidAccount,
    invalidCategory,
    invalidDate,
    expenseList,
  } = useSelector((state) => state.expense);
  const { invalidAccountBalance, activateUpdate } = useSelector(
    (state) => state.form
  );
  // collects the type of expense and asigns the state in const
  const valueTypeHandler = (event) => {
    dispatch(expenseTypeValidator(false));
    dispatch(addExpenseItem({ ...expenseItem, expenseType: event }));
  };
  // Account to be debited or credited here
  const valueAccountHandler = (event) => {
    dispatch(accountValidator(false));
    dispatch(addExpenseItem({ ...expenseItem, account: event.target.value }));
  };
  // Category whom expense belongs
  const categoryHandler = (event) => {
    dispatch(categoryValidator(false));
    dispatch(addExpenseItem({ ...expenseItem, category: event.target.value }));
  };
  //DATE
  const dateChangeHandler = (event) => {
    dispatch(dateValidator(false));
    dispatch(addExpenseItem({ ...expenseItem, date: event.target.value }));
  };
  //DESCRIPTION
  const descriptionHandler = (event) => {
    console.log(event.target.value);
    dispatch(
      addExpenseItem({ ...expenseItem, description: event.target.value })
    );
  };
  //Show and hide the expense form

  //Hide from and clear it
  const showAddExpenseHanddler = () => {
    const expenseCleared = {
      ...expenseItem,
      expenseType: "",
      account: "",
      amount: "",
      currency: "USD",
      category: "",
      date: "",
      description: "",
    };
    dispatch(transactionForm(false));
    dispatch(expenseTypeValidator(false));
    dispatch(accountValidator(false));
    dispatch(accountBalanceValidator(false));
    dispatch(categoryValidator(false));
    dispatch(dateValidator(false));
    dispatch(updateEnabler(false));
    dispatch(addExpenseItem(expenseCleared));
  };

  // SUBMIT
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      expenseItem.expenseType === "" ||
      expenseItem.account === "" ||
      expenseItem.amount.length === 0 ||
      expenseItem.category === "" ||
      expenseItem.date === ""
    ) {
      if (expenseItem.expenseType === "") {
        dispatch(expenseTypeValidator(true));
      }
      if (expenseItem.account === "") {
        dispatch(accountValidator(true));
      }
      if (expenseItem.amount.length === 0) {
        dispatch(accountBalanceValidator(true));
      }
      if (expenseItem.category === "") {
        dispatch(categoryValidator(true));
      }
      if (expenseItem.date === "") {
        dispatch(dateValidator(true));
      }
      return;
    }
    if (activateUpdate) {
      let notUpdatedList = expenseList.filter(
        (item) => item.id !== expenseItem.id
      );
      dispatch(newNotDeletedExpenseList(notUpdatedList));
      dispatch(addedItem());
      const expenseCleared = {
        id: "",
        expenseType: "",
        account: "",
        amount: "",
        currency: "USD",
        category: "",
        date: "",
        description: "",
        showDescription: false,
      };
      dispatch(addExpenseItem(expenseCleared));
      dispatch(updateEnabler(false));
    } else {
      dispatch(
        addExpenseItem({
          ...expenseItem,
          id: uuidv4(),
        })
      );
      dispatch(addedItem());
      const expenseCleared = {
        id: uuidv4(),
        expenseType: "",
        account: "",
        amount: "",
        currency: "USD",
        category: "",
        date: "",
        description: "",
        showDescription: false,
      };
      dispatch(addExpenseItem(expenseCleared));
    }

    dispatch(transactionForm(false));
  };
  const { accountList } = useSelector((state) => state.account);

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
      {/* --TYPE-- of expense  */}
      <ToggleButtonGroup
        className={`${styles["form-control"]} ${
          invalidExpenseType && styles.invalid
        }`}
        type="radio"
        name="expenseType"
        value={expenseItem.expenseType}
        onChange={valueTypeHandler}
      >
        <ToggleButton id="Income" value="Income" variant="outline-success">
          Income
        </ToggleButton>
        <ToggleButton id="Expense" value="Expense" variant="outline-danger">
          Expense
        </ToggleButton>
      </ToggleButtonGroup>

      {/* --ACCOUNT-- selection */}
      <div
        className={`${styles["form-control"]} ${
          invalidAccount && styles.invalid
        }`}
      >
        <label>Account</label>
        <select
          id="accountDebited"
          value={expenseItem.account}
          onChange={valueAccountHandler}
        >
          <option></option>
          {accountList.map((item, index) => (
            <option key={index} value={item.number}>
              {item.number} | {item.type}
            </option>
          ))}
        </select>
      </div>

      {/* --AMOUNT-- which comes from AmountMoneyInput component */}
      <div
        className={`${styles["form-control"]} ${
          invalidAccountBalance && styles.invalid
        }`}
      >
        <label>Amount</label>
        <AmountMoneyInput />
      </div>
      {/* --CURRENCY-- that comes from component as well  */}
      <br />
      <CurrencySelect />

      {/* --CATEGORY-- for expenses select option*/}
      <div
        className={`${styles["form-control"]} ${
          invalidCategory && styles.invalid
        }`}
      >
        <label>Category</label>
        <select
          id="categoryOfExpense"
          value={expenseItem.category}
          onChange={categoryHandler}
        >
          <option></option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* --DATE-- the expense was made */}
      <div
        className={`${styles["form-control"]} ${invalidDate && styles.invalid}`}
      >
        <label>Date</label>
        <input
          type="date"
          min="2018-01-01"
          max="2025-01-01"
          value={expenseItem.date}
          onChange={dateChangeHandler}
        />
      </div>
      <br />
      {/* --DESCRIPTION--  */}

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={expenseItem.description}
          as="textarea"
          rows={2}
          onChange={descriptionHandler}
        />
      </Form.Group>

      <br />
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
        onClick={showAddExpenseHanddler}
      >
        Cancel
      </Button>
    </Form>
  );
};
