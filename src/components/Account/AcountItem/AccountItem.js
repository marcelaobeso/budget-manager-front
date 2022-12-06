import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newNotDeletedAccountList } from "../../../store/slices/formSlice/accountSlice/accountSlice";
import {
  accountForm,
  updateEnabler,
} from "../../../store/slices/formSlice/formSlice";
import { addNewAccountItem } from "../../../store/slices/formSlice/accountSlice/accountSlice";
import "./AccountItem.css";
import { getAllAccounts } from "../../../store/slices/formSlice/accountSlice/thunk";

export const AccountItem = () => {
  const accountList = useSelector((store) => store.account.accountList);
  const dispatch = useDispatch();

  const deleteAccount = (id) => {
    let newAccounts = accountList.filter((item) => item.id !== id);
    dispatch(newNotDeletedAccountList(newAccounts));
  };
  const updateAccount = (id) => {
    dispatch(updateEnabler(true));
    let itemToUpdate = accountList.find((i) => i.id === id);
    dispatch(accountForm(true));
    dispatch(addNewAccountItem(itemToUpdate));
  };

  useEffect(() => {
    dispatch(getAllAccounts());
    // dispatch(addCurrencies());
  }, []);
  return accountList.length > 0 ? (
    accountList.map((i) => (
      <Container key={i.id_account} className="d-block">
        <Row className="origin_account-item">
          <Col>
            <h2>{i.name}</h2>
            <p>{i.account_number}</p>
          </Col>
          <Col className="origin_account-item__center">
            <button onClick={() => updateAccount(i.id_account)}>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button onClick={() => deleteAccount(i.id_account)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Col>
          <Col className="origin_account-item__last">
            <div className="origin_account-item__balance">
              {i.currency} {parseFloat(i.balance).toFixed(2)}
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
