import { Button } from "react-bootstrap";
import "./navigation.styles.scss";
import { Link, Outlet, Navigate } from "react-router-dom";
import { Fragment } from "react";
import logo from "../../assets/react.png";

const Navigation = () => {
  return (
    <Fragment>
      <div className="container-main">
        <div className="container-header">
          <div className="container-logo">
            <Link to="/">
              <span>
                <img className="logo" src={logo} alt="logo" />
              </span>
            </Link>
          </div>

          <div className="navigation-controller">
            <div className="navigation-dropdowns">
              <h4>Navigation</h4>
            </div>
          </div>

          <div className="user-specs">
            <div className="login-status">
              <span>
                <Link to="/logon">
                  <Button variant="link">Login/SignUp</Button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
