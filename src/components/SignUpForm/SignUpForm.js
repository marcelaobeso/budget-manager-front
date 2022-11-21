import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { signUpUser } from "../../store/slices/signUpSlice/signUpSlice";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  // const {} = useSelector()
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    dispatch(signUpUser({ email, password }));
    document.getElementById("formBasicEmail").value = "";
    document.getElementById("formBasicPassword").value = "";
  };
  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="firstName" label="First Name">
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="lastName" label="Last Name">
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userName">
        <FloatingLabel label="Username">
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel label="Email address ">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel label="Password ">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>

      <Button variant="dark" type="submit">
        SignUp
      </Button>
    </Form>
  );
};

export default SignUpForm;
