'use client'
import React, { useState } from 'react';

const RentDetailsForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    rentCycle: '',
    latePaymentFine: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = (e) => {
    console.log("Form - 4:", formData); // Log form data
    e.preventDefault();
    onNext(formData); // Pass form data to the next step
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left Side: Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="/pg6.png" alt="Rent Details Illustration" className="img-fluid" />
        </div>

        {/* Right Side: Form */}
        <div className="col-md-6">
          <h2>Step 4: Rent Details</h2>
          <form>
            <div className="row">
              {/* Rent Cycle */}
              <div className="col-md-6 mb-3">
                <label htmlFor="rentCycle" className="form-label">Rent Cycle</label>
                <select 
                  className="form-select" 
                  id="rentCycle" 
                  name="rentCycle" 
                  value={formData.rentCycle} 
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="1 day">1 day</option>
                  <option value="10 days">10 days</option>
                  <option value="15 days">15 days</option>
                  <option value="1 month">1 month</option>
                  <option value="6 months">6 months</option>
                  <option value="12 months">12 months</option>
                </select>
              </div>

              {/* Late Payment Fine */}
              <div className="col-md-6 mb-3">
                <label htmlFor="latePaymentFine" className="form-label">Late Payment Fine (per day)</label>
                <select 
                  className="form-select" 
                  id="latePaymentFine" 
                  name="latePaymentFine" 
                  value={formData.latePaymentFine} 
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option> 
                </select>
              </div>
            </div>

            {/* Navigation Buttons - Centered */}
            <div className="text-center">
              <button className="btn btn-secondary me-2" onClick={onBack}>Back</button>
              <button className="btn btn-primary" onClick={handleNextClick}>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentDetailsForm;