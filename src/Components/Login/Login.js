// src/Components/Login/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Login Successful!');
      // Proceed with login
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
