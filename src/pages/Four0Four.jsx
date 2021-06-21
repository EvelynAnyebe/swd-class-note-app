import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../assets/images/tech4dev-logo.png";

const FourOFour = () => {
  return (
    <main>
      <Container>
        <Row noGutters>
          <Col md={2}></Col>
          <Col sm={12} md={8} className="text-center">
            <div className="card">
              <img src={logo} alt="logo" className="card-logo"/>
              <h1>
                <FontAwesomeIcon
                  icon={["fas", "question-circle"]}
                  className="spin-it icon"
                  aria-hidden="true"
                />
              </h1>
              <h1>Lost In The Desert</h1>
              <hr />
              <p>
                It looks like you have missed your way. Let's get you back home.
              </p>
              <Link to="/home">Go back home</Link>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </main>
  );
};

export default FourOFour;
