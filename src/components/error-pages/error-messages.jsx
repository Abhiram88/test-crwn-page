import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";
import "./error-messages.styles.scss";

const Alerts = ({ message = "error" }) => {
  console.log("hello");
  return (
    <Fragment>
      <Alert variant="danger" className="error-message">
        {message}
      </Alert>
    </Fragment>
  );
};

export default Alerts;
