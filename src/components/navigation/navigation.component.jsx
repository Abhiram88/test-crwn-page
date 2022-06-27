import { Button } from "react-bootstrap";
import "./navigation.styles.scss";
import { Link, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import logo from "../../assets/react.png";
import { useContext, useState, useEffect } from "react";
import {
  UserContext,
  setUser,
  setEmail,
  saveToken,
  updateLoginState,
  isLoggedIn,
} from "../../contexts/user.context";
import { PeopleFill } from "react-bootstrap-icons";
import axios from "axios";
import { Badge } from "react-bootstrap";

const Navigation = () => {
  const { updateLoginState, isLoggedIn } = useContext(UserContext);
  const [searchUsers, setSearchUsers] = useState([]);
  const [friendRequests, updateFriendRequests] = useState(0);
  const { currentUser, userEmail } = useContext(UserContext);

  let navigate = useNavigate();

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

  const logOut = () => {
    updateLoginState(false);
    console.log("false");
    navigate("/logon");
  };

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
              <div>
                <span>
                  <h4>Navigation</h4>
                </span>
                <span className="friends-reminder">
                  <div>
                    <PeopleFill className="people-fill" />
                    <span className="">
                      <Badge pill bg="light" className="badges">
                        <p className="badges-text"> {friendRequests} </p>
                      </Badge>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className="user-specs">
            <div className="login-status">
              {isLoggedIn ? (
                <span>
                  <Button variant="link" onClick={logOut}>
                    Signout
                  </Button>
                </span>
              ) : (
                <span>
                  <Button variant="link">Login/SignUp</Button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
