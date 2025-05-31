import { useState } from "react";
import style from "./LoginForm.module.css";
export const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className={style.container}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          id="userName"
          value={user.username}
          onChange={handleInput}
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInput}
          required
         />
        <button className={style.btn}>Submit</button>
      </form>
    </div>
  );
};
