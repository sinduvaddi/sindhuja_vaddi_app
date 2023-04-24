import React, { useState, useEffect } from 'react';
import '.././style.css';

export default function Login() {
  const inititalValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(inititalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      console.log('Navigate to Dashboad');
    }
  };

  useEffect(() => {
    //Issue 1
    // if (isSubmit) {
    //   setFormErrors(validateForm(formValues));
    // }
  }, [formErrors]);

  const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.email) {
      errors.email = 'Email is required!';
    }
    if (!formValues.password) {
      errors.password = 'Password is required!';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be more than 6 characters';
    } else if (formValues.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    return errors;
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="loginForm">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="errorTxt">{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="errorTxt">{formErrors.password}</p>
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="detailsSection">
        <h2>Entered Details</h2>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      </div>
    </React.Fragment>
  );
}
