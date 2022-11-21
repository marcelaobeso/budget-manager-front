import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignUpForm from "../SignUpForm/SignUpForm";
import EWallet from "../../assets/images/eWallet.svg";

import {
  changeToLog,
  changeToSign,
} from "../../store/slices/logSlice/logSlice";
import { Link } from "react-router-dom";

const Signin = () => {
  const { login } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <img src={EWallet} alt="e wallet with cellphone" />
              <p>Log in istead if you already have an account</p>
              <Link to={"/login"}>
                <Button variant="secondary">Login</Button>
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
