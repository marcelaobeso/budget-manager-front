import { Button, FloatingLabel, Form } from "react-bootstrap";
import { loginUser } from "../../store/slices/formSlice/formSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  // const {} = useSelector()
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    dispatch(loginUser({ email, password }));
    document.getElementById("formBasicEmail").value = "";
    document.getElementById("formBasicPassword").value = "";
  };
  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="userName">
        <FloatingLabel label="Username">
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel label="Password ">
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
