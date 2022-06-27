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
import { format } from "date-fns";
import moment, * as moments from "moment";
import { Link } from "react-router-dom";
import Alerts from "../error-pages/error-messages";

const UserWall = () => {
  const { currentUser, userEmail } = useContext(UserContext);
  const [posts, updatePost] = useState([]);
  const [currentPost, setCurrentPost] = useState("");
  const [friendRequests, updateFriendRequests] = useState(0);
  const [searchUsers, setSearchUsers] = useState([]);
  const [news, setNews] = useState([]);
  const [userid, setUserID] = useState("");

  //const [users, setUsers] = useState("");
  //console.log(currentUser);
  //var searchUsers = [];

  function getUsers(event) {
    var searchParamaeter = event.target.value.toLocaleLowerCase();
    // setSearchUsers(values);
    if (searchParamaeter == "") {
      setSearchUsers([]);
    } else {
      axios
        .get(
          `http://localhost:4000/searchUserFunctionality/${searchParamaeter}`
        )
        .then((response) => {
          setSearchUsers(response.data);
        })
        .catch((err) => console.log(err.message));
    }
  }

  function submitPost() {
    console.log(userid);
    console.log("poist");
    axios
      .post(`http://localhost:4000/sharePost/${userid}/${currentPost}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.message));
  }

  //console.log(searchUsers);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getPosts?email=${userEmail}`)
      .then((response) => {
        setUserID(response.data[0]);
        console.log("user", userid);
        updatePost(response.data[1]);
      });
  }, []);

  console.log(news);

  useEffect(() => {
    axios.get(`http://localhost:4000/getNewsHeadlines`).then((response) => {
      setNews(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getFriendRequests/${userEmail}`)
      .then((response) => {
        if (response) {
          console.log(response.data[1]);
          updateFriendRequests(response.data[1]);
        } else {
          console.log("err");
        }
        //updateFriendRequests(response)
      })
      .catch((err) => console.log(err.message));
  }, [friendRequests]);

  return (
    <Fragment>
      <Navigation />

      <div className="wall-container">
        <div className="left-panel">
          <h3>
            <u>NEWS</u>
          </h3>
          <div className="news-section">
            {Object.entries(news).map(([key, value]) => {
              return (
                <div className="news-headlines" key={key}>
                  <a href={value} target="_blank">
                    {key}
                  </a>
                  <br />
                  <br></br>
                </div>
              );
            })}
          </div>
        </div>

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
                      onChange={(e) => setCurrentPost(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    className="post-submit"
                    variant="primary"
                    onClick={submitPost}
                  >
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
                  <p className="post-time">{post.created_on}</p>
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
                      <Button
                        variant="primary"
                        className="share-post"
                        onClick={submitPost}
                      >
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
          Friend requests{" "}
          <Badge pill bg="primary">
            {friendRequests}
          </Badge>
          <span className="visually-hidden">unread messages</span>
          <div className="search-friends">
            <input type="text" onChange={getUsers}></input>
          </div>
          <div className="displaySearchResults">
            <ul className="searchResults">
              {searchUsers.map((users) => (
                <li>{users.email}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserWall;
