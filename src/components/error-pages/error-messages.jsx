import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";
import "./error-messages.styles.scss";

const Alerts = ({ message = "error" }) => {
  return (
    <div className="error-message">
      <Alert variant="danger">
        {message}
      </Alert>
    </div>
  );
};

export default Alerts;
