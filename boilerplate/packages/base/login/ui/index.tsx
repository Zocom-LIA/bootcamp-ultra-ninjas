// @zocom/login/Login.tsx

import React, { useState } from 'react';
import "./style.scss";
import { StyleTypes } from "@zocom/types";

interface User {
  username: string;
  password: string;
}

export const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  const handleCreateAccount = () => {
    // Check if the username is already taken
    if (loggedInUser) {
      setError('Account already exists with this username');
    } else {
      setLoggedInUser({ username, password });
      setError('');
    }
  };

  const handleLogin = () => {
    // Check if the entered username and password match
    if (loggedInUser && loggedInUser.username === username && loggedInUser.password === password) {
      setError('');
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='login__btns'>
        <button onClick={handleCreateAccount}>Create Account</button>
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
