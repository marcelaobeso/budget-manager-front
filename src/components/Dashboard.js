import { Account } from "./Account/Account";
import { Transaction } from "./transactions/Transaction";
import NavigationBar from "./Navbar/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddExpense } from "./transactions/addExpense/AddExpense";
import { AddAccount } from "./Account/AddAccount/AddAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import {
  accountForm,
  transactionForm,
} from "../store/slices/formSlice/formSlice";

const Budget = () => {
  const { showAddExpenseForm: showExpense, showAddAccountForm: showAccount } =
    useSelector((state) => state.form);
  const dispatch = useDispatch();
  const showAddExpenseHanddler = () => {
    dispatch(transactionForm());
  };
  console.log(showAccount);
  const ShowAddAccountHanddler = () => {
    dispatch(accountForm(true));
  };
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            {showExpense ? (
              <AddExpense />
            ) : (
              <>
                <Account />
                <div className="text-center">
                  <button onClick={ShowAddAccountHanddler}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </>
            )}
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            {showAccount ? (
              <AddAccount />
            ) : (
              <>
                <Transaction />
                <div className="text-center">
                  <button onClick={showAddExpenseHanddler}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Budget;
