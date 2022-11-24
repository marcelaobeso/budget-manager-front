import { Button, FloatingLabel, Form } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { signUpUser } from "../../../../store/slices/signUpSlice/signUpSlice";

const LoginForm = () => {
  // const {} = useSelector()
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    const userInfo = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    dispatch(signUpUser(userInfo));
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };
  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3">
        <FloatingLabel controlId="username" label="Username">
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel controlId="password" label="Password ">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>

      <Button variant="dark" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
