import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AccountItem.css";

export const AccountItem = () => {
  const account = {
    name: "Cuenta de depositos salariales",
    account: 4864861,
    balance: 120,
    currency: "$",
    type: "savings",
  };
  return (
    <Container className="d-block">
      <Row className="account-item">
        <Col>
          <h2>{account.name}</h2>
          {account.type}
        </Col>
        <Col className="account-item__center">
          <FontAwesomeIcon icon={faPencil} />
          <FontAwesomeIcon icon={faTrash} />
        </Col>
        <Col className="account-item__last">
          <div className="account-item__balance">
            {account.currency}
            {account.balance}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
