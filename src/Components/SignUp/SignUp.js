// src/Components/Sign_Up/Sign_Up.js
import React, { useState } from 'react';
import './SignUp.css';

function Sign_Up() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Sign Up Successful!');
      // Submit data here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Sign_Up;
