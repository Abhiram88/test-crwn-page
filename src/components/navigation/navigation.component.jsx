import { Button } from "react-bootstrap";
import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="container-main">
        <div className="container-header">
          <div className="container-logo">
            <span>
              <h4>Logo</h4>
            </span>
          </div>

          <div className="navigation-controller">
            <div className="navigation-dropdowns">
              <h4>Navigation</h4>
            </div>
          </div>

          <div className="user-specs">
            <div className="login-status">
              <span>
                <Button variant="link">Login/SignUp</Button>
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
