import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
      e.preventDefault();
      console.log(user);
  }

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>Register User</h2>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={onChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={onChange}
            placeholder="Enter Email"
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
        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Enter Confirm Password"
            value={user.password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Sign Up" />
        <p>
          Already have an account? <NavLink to="/login">Sign In</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;