import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>Login User</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Login" />
        <p>
          Don't have an account? <NavLink to="/signup">Register Now</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
