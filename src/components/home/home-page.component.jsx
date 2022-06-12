import "./home-page.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container-home">
        <h2>Home Page</h2>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default HomePage;
