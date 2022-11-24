import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { signUpUser } from "../../../../store/slices/signUpSlice/signUpSlice";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  // const {} = useSelector()
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    const userInfo = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(signUpUser(userInfo));
  };
  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="firstName" label="First Name">
              <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="lastName" label="Last Name">
              <Form.Control type="text" placeholder="Last Name" />
            </FloatingLabel>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel controlId="username" label="Username">
          <Form.Control type="text" placeholder="Username" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel controlId="email" label="Email address ">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel controlId="password" label="Password ">
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
