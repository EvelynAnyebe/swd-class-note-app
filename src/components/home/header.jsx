import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="home-header-content">
        <h1>Women Techsters Fellowship 2021 SWD Track</h1>
        <p>
          At the&nbsp;
          <strong>
            Software development track of the women techsters fellowship 2021,
          </strong>
          &nbsp; alot of learning took place. SWD className notes contains a
          notes of what was learnt at each className.
        </p>
        <Link to="/signup">
          <button className="btn btn-lg btn-outline-info text-white mb-4">
            Start here to view
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
