import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { NewUserState, setEmail, setPassword, setUsername } from '../actions/addNewUser';
import { FormLabel } from '@mui/material';
import {TextField} from '@mui/material';
import { Button } from '@mui/material';


const LoginForm = () => {
  const userInfo = useSelector((state) => state.loginReducer.login);
  const handleSignUp = async (dispatch, userInfo) => {
    const result = await fetch("https://localhost:7003/api/UserInfoItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        username: userInfo.username,
        password: userInfo.password,
        }),
    });
    const data = await result.json();
    NewUserState(dispatch, data)
    window.location.reload();
  };
  const dispatch = useDispatch();
  const handleLogin = async (dispatch, userInfo) => {
    const username = userInfo.username;
    const password = userInfo.password;
    const result = await fetch(`https://localhost:7003/api/UserInfoItems/${username}/${password}`, {
      method: "GET",
    });
    const data = await result.json();
    NewUserState(dispatch, data)
    window.location.reload();
  };
  
  return (
    <div className="main-login">
      <div className="signup">
      <form>
        <FormLabel>
          Username:
          <TextField
            type="username"
            onChange={(e) => setUsername(dispatch, e.target.value)}
            />
          </FormLabel>
            <FormLabel>
              Email:
            <TextField
              type="email"
              onChange={(e) => setEmail(dispatch, e.target.value)}
            />
        </FormLabel>
        <FormLabel>
          Password:
          <TextField
            type="password"
            onChange={(e) => setPassword(dispatch, e.target.value)}
          />
        </FormLabel>
          <Button onClick={() => handleSignUp(dispatch, userInfo)} >Sign Up</Button>
        </form>
      </div>
      <div className="login">
      <form>
        <FormLabel>
          Username:
          <TextField
            type="username"
            onChange={(e) => setUsername(dispatch, e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Password:
          <TextField
            type="password"
            onChange={(e) => setPassword(dispatch, e.target.value)}
          />
        </FormLabel>
          <Button onClick={() => handleLogin(dispatch, userInfo)} >Log in</Button>
        </form>
      </div>
    </div>
    )
  };

export default LoginForm;


/* import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // login successful
          // redirect to home page or show welcome message
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
*/