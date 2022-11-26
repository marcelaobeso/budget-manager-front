import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newNotDeletedAccountList } from "../../../store/slices/formSlice/accountSlice";
import {
  accountForm,
  addNewAccountItem,
  updateEnabler,
} from "../../../store/slices/formSlice/formSlice";
import "./AccountItem.css";

export const AccountItem = () => {
  const accountList = useSelector((store) => store.account.accountList);
  const { newAccountItem } = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const deleteAccount = (id) => {
    //let deletedItem = accountList.find((i) => i.number === id);
    let newAccounts = accountList.filter((item) => item.id !== id);
    dispatch(newNotDeletedAccountList(newAccounts));

    // fetch(`https://sitelusapp.herokuapp.com/todo/${id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     deleted: !deletedItem.deleted,
    //   }),
    // }).then(() => setDeleted(true));
  };
  const updateAccount = (id) => {
    dispatch(updateEnabler(true));
    let itemToUpdate = accountList.find((i) => i.id === id);
    dispatch(accountForm(true));
    dispatch(addNewAccountItem(itemToUpdate));
  };
  return accountList.length > 0 ? (
    accountList.map((i) => (
      <Container key={i.id} className="d-block">
        <Row className="account-item">
          <Col>
            <h2>{i.name}</h2>
            <p>{i.number}</p>
          </Col>
          <Col className="account-item__center">
            <button onClick={() => updateAccount(i.id)}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => deleteAccount(i.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Col>
          <Col className="account-item__last">
            <div className="account-item__balance">
              {i.currency} {i.balance}
            </div>
            <Row>{i.type}</Row>
          </Col>
        </Row>
      </Container>
    ))
  ) : (
    <p>No Accounts to show, click the + to add an account</p>
  );
};
