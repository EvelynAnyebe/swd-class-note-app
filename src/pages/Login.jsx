import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../assets/images/tech4dev-logo.png";
import useContextGetter from "../hooks/useContextGetter";
import useLoggedIn from "../hooks/useLoggedIn";

const Login = () => {
 //Check if user is loggedIn.
  //If user is already logged in redirect the user to notes page
  useLoggedIn();

  const {dispatch, state: {alertMessage}} = useContextGetter();

  const { register, handleSubmit } = useForm();

  const login = ({ email, password}) => {

    // Send dispatch to inform the user
    dispatch(
        {
          type: "ALERT_MESSAGE",
          payload: {message: "Please wait while we log you in...", variant:"info"}
        }
      );

    // send a request to login a
    // user
    let user = {
      email: email,
      password: password,
    };

    fetch(`https://user-manager-three.vercel.app/api/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user), 
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error === true) {
          dispatch(
            {
              type: "ALERT_MESSAGE",
              payload: {message: result.message, variant:"danger"}
            }
          );
          return false;
        }
        dispatch({
          type: "LOGIN",
          payload: result.body,
        });
      })
      .catch((err) => {
        console.log("this error occurred in login", err);
        dispatch(
          {
            type: "ALERT_MESSAGE",
            payload: {message: "an error occurred. Please try again later", variant:"danger"}
          }
        );
        
      });
  };
  return (
    <main>
      <Container>
        <Row noGutters>
          <Col md={2}></Col>
          <Col sm={12} md={8} className="text-center">
            <div>
              <img src={logo} alt="logo" className="card-logo" />

              <Form onSubmit={handleSubmit(login)} className="card w-90 mb-5">
                <p className="mb-5">
                  <FontAwesomeIcon
                    icon={["fas", "user"]}
                    className="icon"
                    aria-hidden="true"
                  />
                  <strong>Login</strong>
                </p>
                {alertMessage.message ? (
                  <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>
                ) : (
                  ""
                )}
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                </Form.Group>

                <Button variant="secondary" type="submit" className="mb-4">
                  Login
                </Button>
              </Form>

              <p>
                <Link to="/signup" className="btn btn-sm btn-info">
                  Signup
                </Link>
                &nbsp;
                <Link to="/home" className="btn btn-sm btn-info">
                  home
                </Link>
              </p>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
