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

export const ExpenseItem = () => {
  const { expenseList } = useSelector((state) => state.expense);

  const dispatch = useDispatch();

  const deleteAccount = (id) => {
    //let deletedItem = accountList.find((i) => i.number === id);
    let newExpensesList = expenseList.filter((item) => item.id !== id);
    dispatch(newNotDeletedExpenseList(newExpensesList));
  };

  const updateAccount = (id) => {
    console.log(id);
    let itemToUpdate = expenseList.find((i) => i.id_expense === id);
    dispatch(updateEnabler(true));
    dispatch(transactionForm(true));
    dispatch(addExpenseItem(itemToUpdate));
  };
  const descriptionVisibilityHandler = (id) => {
    const index = expenseList.map((object) => object.id).indexOf(id);
    dispatch(showDescriptionEnabler(index));
  };
  useEffect(() => {
    dispatch(getAllExpenses());
  }, []);
  console.log(expenseList);

  return expenseList.length > 0 ? (
    expenseList.map((i, index) => (
      <Container key={i.id_expense}>
        <Row className={`${styles["expense-item"]}`}>
          <Col>
            <Row>{i.id_category}</Row>
            <Row>{i.origin_account}</Row>
          </Col>
          <Col className={`${styles["expense-item__center"]}`}>
            <button
              onMouseEnter={() => descriptionVisibilityHandler(i.id)}
              onMouseLeave={() => descriptionVisibilityHandler(i.id)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button onClick={() => updateAccount(i.id_expense)}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => deleteAccount(i.id)}>
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
                {i.id_currency} {i.amount}
              </div>
            </Row>
            <Row>{i.expense_date}</Row>
          </Col>
          {i.showDescription && <div>{i.description}</div>}
        </Row>
      </Container>
    ))
  ) : (
    <p>No Expenses to show, click the + to add a new one</p>
  );
};
