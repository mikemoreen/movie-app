import React, { useState } from 'react'
import "./SignUp.css"

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword:''};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value } );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
   
  };

return (
  <div className="auth-wrapper">
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='firstName'
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Last name" 
          name='lastName'
          onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='confirmPassword'
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered <a href="/log_in">sign in?</a>
        </p>

      </form>
    </div>
  </div>
    )
}
export default SignUp