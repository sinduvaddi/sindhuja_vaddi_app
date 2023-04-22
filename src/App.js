import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <center>Grettings , Signin to view your portfolio!!!</center>

      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        />{' '}
        <br />
        <input
          type="password"
          name="password"
          value={username}
          onChange={changeHandler}
        />{' '}
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}
