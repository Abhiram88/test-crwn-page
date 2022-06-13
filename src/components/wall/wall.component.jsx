import React from "react";
import { Fragment } from "react";
import { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "../navigation/navigation.component";
import { Button } from "react-bootstrap";
import './wall.styles.scss'

const UserWall =()=>{
    return(
        <Fragment>
            <Navigation />
            <div className="container">
                <div className="left-panel">
                    left
                </div>
                <div className="middle-panel">
                    <div className="add-post">
                        <Form>
                        <Form.Group className="mb-3 post-area" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> <i>want to share...</i></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Button className="post-submit" variant="primary">Post</Button>
                        </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className="right-panel">
                    right
                </div>
            </div>
        </Fragment>
    );
};

export default UserWall;