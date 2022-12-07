import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import React from "react";
import {UserList} from "./user-list";
import * as authService from "../../services/auth-service"
import * as userService from "../../services/users-service"

export const Login = () => {
 const [existingUsers, setExistingUsers] = useState([]);
 const [loginUser, setLoginUser] = useState({});
 const navigate = useNavigate()

const login = () =>
  authService.login(loginUser)
    .then(() => navigate('/profile'))
    .catch(e => alert(loginUser.username));
const deleteUser = (uid) =>
  userService.deleteUser(uid)
      .then(findAllUsers)
const findAllUsers = () =>
  userService.findAllUsers()
      .then(users => {
          setExistingUsers(users)
      })
useEffect(findAllUsers, []);

return (
  <div>
    <h1>Login</h1>
    <input className="mb-2 form-control"
           onChange={(e) =>
             setLoginUser({...loginUser, username: e.target.value})}
           placeholder="username"/>
    <input className="mb-2 form-control"
           onChange={(e) =>
             setLoginUser({...loginUser, password: e.target.value})}
           placeholder="password" type="password"/>
    <button onClick={login} className="btn btn-primary mb-5">Login</button>

    <h1>Login As</h1>

    <UserList users={existingUsers} deleteUser={deleteUser}/>

  </div>
);
};