import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../assets/images/tech4dev-logo.png";
import useContextGetter from "../hooks/useContextGetter";
import useLoggedIn from "../hooks/useLoggedIn";

const NavBar = () => {

  //Redirect a user that is not logged in to login page
  useLoggedIn();
  
  const {dispatch, state: {isLoggedIn}} = useContextGetter();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <Container>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand>
          <img
            alt="logo"
            src={logo}
            width="60"
            height="30"
            className="d-inline-block align-center"
          />
          <span className="p-2">SWD Class Notes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className="underline">&nbsp;</div>
        <Navbar.Collapse id="responsive-navbar-nav">
          {!isLoggedIn ? (
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/signup">
                  <Button variant="outline-secondary">Signup</Button>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login">
                  <Button variant="outline-secondary">Login</Button>
                </Link>
              </Nav.Item>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/notes" className="btn btn-md text-secondary">Notes</Link>
              </Nav.Item>
              <Nav.Item>
                <span  className="btn btn-md text-secondary" onClick={logout}>
                  Logout
                </span>
              </Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
