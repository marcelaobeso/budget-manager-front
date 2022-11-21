import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import Income from "../../assets/images/income.svg";
import { changeToSign } from "../../store/slices/logSlice/logSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <LoginForm />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div>
              <img src={Income} alt="Income, peggybank on top of a laptop" />
              <p>Sing up instead if you dont have an account yet</p>
              <Link to={"/"}>
                <Button variant="secondary">Sign up</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
