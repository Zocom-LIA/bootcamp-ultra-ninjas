



import React, { useState } from 'react';
import './style.scss';
import { StyleTypes } from '@zocom/types';
import { Button,ButtonType } from '@zocom/button';
import logoImage from '../../../.././../assets/logo.svg';

interface User {
  username: string;
  password: string;
}

export const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  const handleCreateAccount = () => {
    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setError('Account already exists with this username');
    } else {
      const newUser: User = { username, password };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setLoggedInUser(newUser);
      setError('');

      // Log the created account
      console.log('Account created:', newUser);
    }
  };

  const handleLogin = () => {
    // Check if the entered username and password match
    const userToLogin = users.find((user) => user.username === username && user.password === password);

    if (userToLogin) {
      setError('');
      setLoggedInUser(userToLogin);
      alert('Login successful!');

      // Log the login activity
      console.log('User logged in:', userToLogin.username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
    

    
    <div className="login">
    <img src={logoImage} alt="Box Top" className="login__image" />
     
      <h2 className='login__h2'>Login</h2>
      <div className='login__info'>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='login__info'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login__btns">
        <Button type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={handleCreateAccount}>Create Account</Button>
        <Button type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={handleLogin}>Login</Button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
};

