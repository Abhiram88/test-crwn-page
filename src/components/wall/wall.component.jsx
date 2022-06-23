import React from "react";
import { Fragment } from "react";
import { useContext, useState, useEffect } from "react";
import { Form, Card, Button, InputGroup, Badge } from "react-bootstrap";
import Navigation from "../navigation/navigation.component";
import profile_pic from "../../assets/profile-pic.jpg";
import {
  UserContext,
  currentUser,
  userEmail,
} from "../../contexts/user.context";

import "./wall.styles.scss";
import axios from "axios";

const UserWall = () => {
  const { currentUser, userEmail } = useContext(UserContext);
  const [posts, updatePost] = useState([]);
  const [friendRequests, updateFriendRequests] = useState(0);
  //console.log(currentUser);

  var userid = "";

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getPosts?email=${userEmail}`)
      .then((response) => {
        userid = response.data[0];
        updatePost(response.data[1]);
      });

  }, [posts]);

  useEffect(()=>{
    axios.get(`http://localhost:4000/getFriendRequests/${userEmail}`)
    .then((response) => {
      if(response){
        console.log(response.data[1])
        updateFriendRequests(response.data[1]);
      }
      else{
        console.log("err")
      }
      
      //updateFriendRequests(response)
    }).catch((err)=>console.log(err.message))
  }, [friendRequests])

  return (
    <Fragment>
      <Navigation />
      <div className="wall-container">
        <div className="left-panel">left</div>
        <div className="middle-panel">
          <div className="add-post">
            <Card className="new-post-card" style={{ width: "35rem" }}>
              <div className="new-post">
                <img className="profile-pic" src={profile_pic} />
                <Form>
                  <Form.Group
                    className="mb-4 post-area"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      className="text-box"
                      as="textarea"
                      rows={2}
                      placeholder={`What's on your mind ${currentUser}?`}
                    />
                  </Form.Group>
                  <Button className="post-submit" variant="primary">
                    Post
                  </Button>
                </Form>
              </div>
            </Card>
          </div>
          {posts.map((post) => (
            <div className="display-posts" key={post.postid}>
              <Card style={{ width: "35rem" }}>
                <Card.Body>
                  <Card.Title className="post-user">{currentUser}</Card.Title>
                  <p className="post-time">June 14th at 6:01 AM</p>
                  <Card.Text className="post">{post.post}</Card.Text>
                  <div className="comment-section">
                    <span>
                      <img className="profile-pic" src={profile_pic} />
                    </span>
                    <span>
                      <Form.Control
                        className="user-comment"
                        aria-label="comment section"
                      />
                    </span>
                    <span>
                      <Button variant="primary" className="share-post">
                        share
                      </Button>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="right-panel">
        <Button variant="primary">
          Friend requests <Badge bg="secondary">{friendRequests}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserWall;
