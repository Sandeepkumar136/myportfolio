import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // Validate function
  const validate = () => {
    const newErrors = {};
    
    if (!formValues.firstName) {
      newErrors.firstName = 'First name is required';
      toast.error('First name is required', { autoClose: 5000 });
    }
    if (!formValues.lastName) {
      newErrors.lastName = 'Last name is required';
      toast.error('Last name is required', { autoClose: 5000 });
    }
    if (!formValues.email.includes('@')) {
      newErrors.email = 'Invalid email address';
      toast.error('Invalid email address', { autoClose: 5000 });
    }
    if (formValues.number && (formValues.number.length > 10 || formValues.number.length < 10)) {
      newErrors.number = 'Contact number must be 10 digits';
      toast.warning('Contact number must be 10 digits', { autoClose: 5000 });
    }
    if (!formValues.service) {
      newErrors.service = 'Service is required';
      toast.error('Service is required', { autoClose: 5000 });
    }
    if (!formValues.requirement) {
      newErrors.requirement = 'Requirement is required';
      toast.error('Requirement is required', { autoClose: 5000 });
    }
    return newErrors;
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    setErrors(validationErrors);

    // Only send email if no validation errors
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_uro8zbs', 'template_m7b4mb9', form.current, 'Yeg3nySFJq-Ihboa_')
        .then((result) => {
          toast.success('Email sent successfully!', {
            autoClose: 5000
          });
        }, (error) => {
          toast.error('Failed to send email. Please try again.', {
            autoClose: 5000
          });
        });
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-overflow">
          <label htmlFor="first-name" className="first-name">Enter First Name</label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            className="input-form"
            value={formValues.firstName}
            placeholder='Enter First Name'
            onChange={handleInputChange}
          />
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
            placeholder='Enter Last Name'
          />
        </div>
        <div className="form-overflow">
          <label htmlFor="email" className="email">Enter Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input-form"
            value={formValues.email}
            placeholder='Enter Email Address'
            onChange={handleInputChange}
          />
        </div>
        <div className="form-overflow">
          <label htmlFor="number" className="number">Enter Contact Number (optional)</label>
          <input
            type="number"
            name="number"
            id="number"
            className="input-form"
            placeholder='Enter Mobile Number'
            value={formValues.number}
            onChange={handleInputChange}
          />
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
            onChange={handleInputChange} placeholder='Enter Message here!'
          />
        </div>
        <div className="form-overflow">
          <button type="submit" className="form-button">Send Your Requirement</button>
        </div>
      </form>
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
};

export default ServicesForm;
