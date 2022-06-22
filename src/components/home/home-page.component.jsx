import "./home-page.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container-home">
        <h2>Home Page</h2>
        <p>
          {" "}
          <Link to="/profile">Profile</Link>
        </p>

        <p>
          <Link to="/wall">Wall</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
