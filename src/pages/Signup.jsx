import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useContextGetter from "../hooks/useContextGetter";
import useLoggedIn from "../hooks/useLoggedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../assets/images/tech4dev-logo.png";

const Signup = () => {
  //Check if user is loggedIn.
  //If user is already logged in redirect the user to notes page
  useLoggedIn();

  const {dispatch, state: {alertMessage}} = useContextGetter();

  const { register, handleSubmit } = useForm();

  const signup = ({ email, password, confirmPassword }) => {

    // Send dispatch to inform the user
    dispatch(
      {
        type: "ALERT_MESSAGE",
        payload: {message: "Processing request...", variant:"info"}
      }
    );

    // check if the password and confirmPassword match
    if (password !== confirmPassword) {
      dispatch(
        {
          type: "ALERT_MESSAGE",
          payload: {message: "Passwords do not match", variant:"danger"}
        }
      );
      return false;
    }

    // send a request to register a
    // new user
    let newuser = {
      email: email,
      password: password,
    };

    fetch(`https://user-manager-three.vercel.app/api/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newuser), //always stringify objects
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
        console.log("this error occurred in signup", err);
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
              <Form onSubmit={handleSubmit(signup)} className="card w-90 mb-5">
                <p className="mb-5">
                  <FontAwesomeIcon
                    icon={["fas", "user"]}
                    className="icon"
                    aria-hidden="true"
                  />
                  <strong>Signup</strong>
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

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    id="confirmPassword"
                    {...register("confirmPassword", { required: true })}
                  />
                </Form.Group>

                <Button variant="secondary" type="submit" className="mb-4">
                  Submit
                </Button>
              </Form>

              <p>
                <Link to="/login" className="btn btn-sm btn-info">
                  Login
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

export default Signup;
