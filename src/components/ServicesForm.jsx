import React, { useState } from 'react';

const ServiceData = ['Frontend Development', 'Backend Development', 'Accounts', 'Data Analysis', 'Other Preferred', 'None'];

const ServicesForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    service: '',
    requirement: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formValues.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formValues.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formValues.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (formValues.number && (formValues.number.length > 10 || formValues.number.length < 10)) {
      newErrors.number = 'Contact number must be 10 digits';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formValues);
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-overflow">
          <label htmlFor="first-name" className="first-name">Enter First Name</label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            className="input-form"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-overflow">
          <label htmlFor="last-name" className="last-name">Enter Last Name</label>
          <input
            type="text"
            name="lastName"
            id="last-name"
            className="input-form"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-overflow">
          <label htmlFor="email" className="email">Enter Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-form"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-overflow">
          <label htmlFor="number" className="number">Enter Contact Number (optional)</label>
          <input
            type="number"
            name="number"
            id="number"
            className="input-form"
            value={formValues.number}
            onChange={handleInputChange}
          />
          {errors.number && <span className="error">{errors.number}</span>}
        </div>
        <div className="form-overflow">
          <label htmlFor="services" className="services">Choose a Service</label>
          <select
            name="service"
            id="services"
            className="input-form"
            value={formValues.service}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select your service</option>
            {ServiceData.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-overflow">
          <label htmlFor="textarea" className="textarea">Write Your Requirement</label>
          <textarea
            name="requirement"
            id="textarea"
            cols="30"
            rows="5"
            value={formValues.requirement}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-overflow">
          <button type="submit" className="form-button">Send Your Requirement</button>
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
