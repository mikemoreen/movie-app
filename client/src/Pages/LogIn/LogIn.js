import React, { useState } from 'react'
import "./LogIn.css"

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/auth';

const initialState = { email: '', password: ''};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value } );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate))
    
  };

return (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={handleSubmit}>
                <h3>Log In</h3>

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
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" >
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
    )
}
export default Login