import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    patientId: '',
    doctorName: '',
    patientName: '',
    admissionNumber: '',
    admissionDate: '',
    outpatient: false,
    policyId: '',
    policyNumber: '',
    policyCompany: ''
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="doctorId">Doctor ID:</label>
        <input
          type="text"
          id="doctorId"
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="patientId">Patient ID:</label>
        <input
          type="text"
          id="patientId"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="doctorName">Doctor Name:</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="admissionNumber">Admission Number:</label>
        <input
          type="text"
          id="admissionNumber"
          name="admissionNumber"
          value={formData.admissionNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="admissionDate">Admission Date:</label>
        <input
          type="text"
          id="admissionDate"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="outpatient">Out Patient:</label>
        <input
          type="checkbox"
          id="outpatient"
          name="outpatient"
          checked={formData.outpatient}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="policyId">Policy ID:</label>
        <input
          type="text"
          id="policyId"
          name="policyId"
          value={formData.policyId}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="policyNumber">Policy Number:</label>
        <input
          type="text"
          id="policyNumber"
          name="policyNumber"
          value={formData.policyNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="policyCompany">Policy Company:</label>
        <input
          type="text"
          id="policyCompany"
          name="policyCompany"
          value={formData.policyCompany}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
