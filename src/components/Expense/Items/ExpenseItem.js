import { Col, Container, Row } from "react-bootstrap";
import styles from "./ExpenseItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import {
  addExpenseItem,
  newNotDeletedExpenseList,
  showDescriptionEnabler,
} from "../../../store/slices/formSlice/expenseSlice/expenseSlice";
import {
  transactionForm,
  updateEnabler,
} from "../../../store/slices/formSlice/formSlice";
import { getAllExpenses } from "../../../store/slices/formSlice/expenseSlice/thunk";
import { useEffect } from "react";
import { addCurrencies } from "../../../store/slices/formSlice/categorySlice/thunk";

export const ExpenseItem = () => {
  const { expenseList } = useSelector((state) => state.expense);
  const { currencies } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const deleteAccount = (id) => {
    //let deletedItem = accountList.find((i) => i.number === id);
    let newExpensesList = expenseList.filter((item) => item.id_expense !== id);
    dispatch(newNotDeletedExpenseList(newExpensesList));
  };

  const updateAccount = (id) => {
    let itemToUpdate = expenseList.find((i) => i.id_expense === id);
    console.log(itemToUpdate);
    dispatch(updateEnabler(true));
    dispatch(transactionForm(true));
    dispatch(addExpenseItem(itemToUpdate));
  };
  const descriptionVisibilityHandler = (id) => {
    const index = expenseList.map((object) => object.id_expense).indexOf(id);
    dispatch(showDescriptionEnabler(index));
  };
  useEffect(() => {
    dispatch(getAllExpenses());

    dispatch(addCurrencies());
  }, []);

  return expenseList.length > 0 ? (
    expenseList.map((i, index) => (
      <Container key={i.id_expense}>
        <Row className={`${styles["expense-item"]}`}>
          <Col>
            <Row>{i.categoryname}</Row>
            <Row>{i.accountname}</Row>
          </Col>
          <Col className={`${styles["expense-item__center"]}`}>
            <button
              onMouseEnter={() => descriptionVisibilityHandler(i.id_expense)}
              onMouseLeave={() => descriptionVisibilityHandler(i.id_expense)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button onClick={() => updateAccount(i.id_expense)}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => deleteAccount(i.id_expense)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Col>
          <Col className={`${styles["expense-item__last"]}`}>
            <Row>
              <div
                className={`${styles["expense-item__price"]} ${
                  i.expense_type === "Income" ? styles.income : styles.expense
                }`}
              >
                {i.currencyname} {i.amount}
              </div>
            </Row>
            <Row>{i.expense_date}</Row>
          </Col>
          {i.showdescription && <div>{i.description}</div>}
        </Row>
      </Container>
    ))
  ) : (
    <p>No Expenses to show, click the + to add a new one</p>
  );
};
