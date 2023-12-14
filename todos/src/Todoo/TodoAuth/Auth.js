import { useState } from 'react';
import './Auth.css';

import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../firebase';

import Theme from '../../TodoA/Theme/Theme';

export default function Auth() {
  const [login, setLogin] = useState(true);
  return (
    <div className="auth">
      <Intro />
      {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <Theme />
      <h1>Todo Final</h1>
    </div>
  );
}

function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password);
  };
  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
        <p>
          No account?
          <span onClick={() => setLogin(false)}>Register</span>
        </p>
      </form>
    </div>
  );
}

function Register({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password);
  };
  return (
    <div className="form">
      <h1>Register</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="rpassword">Confirm Password:</label>
        <input
          type="rpassword"
          name="rpassword"
          id="rpassword"
          placeholder="Confirm Password"
          onChange={(e) => setRPassword(e.target.value)}
          value={rPassword}
        />
        <button type="submit">Register</button>
        <p>
          Have account?
          <span onClick={() => setLogin(true)}>Login</span>
        </p>
      </form>
    </div>
  );
}