import { Col, Container, Row } from "react-bootstrap";
import "./ExpenseItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const ExpenseItem = () => {
  const expensesList = useSelector((state) => state.form.expensesList);
  const expense = {
    category: "food",
    account: 4864861,
    amount: 12,
    date: new Date(),
    description: "bought a dougnut",
    currency: "$",
    type: "expemse",
  };
  return expensesList.length > 0 ? (
    expensesList.map((i, index) => (
      <Container key={index} className="d-block">
        <Row className="expense-item">
          <Col>
            <Row>{expense.category}</Row>
            <Row>{expense.account}</Row>
          </Col>
          <Col className="expense-item__center">
            <FontAwesomeIcon icon={faEye} />
            <FontAwesomeIcon icon={faPencil} />
            <FontAwesomeIcon icon={faTrash} />
          </Col>
          <Col className="expense-item__last">
            <Row>
              <div className="expense-item__price">
                {expense.currency}
                {expense.amount}
              </div>
            </Row>
            <Row>
              {expense.date.getFullYear() +
                "/" +
                (expense.date.getMonth() + 1) +
                "/" +
                expense.date.getDate()}
            </Row>
          </Col>
          <div className="expense-item__first">{expense.description}</div>
        </Row>
      </Container>
    ))
  ) : (
    <p>No Expenses to show, click the + to add a new one</p>
  );
};
