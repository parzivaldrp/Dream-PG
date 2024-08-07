'use client'
import React, { useState } from 'react';

const Owner = ({ onSubmit, onBack, formData, setFormData }) => {
  const [localFormData, setLocalFormData] = useState({
    budgetRange: formData.budgetRange || '',
    extraCharge: formData.extraCharge || '',
    propertyImages: formData.propertyImages || [], // Initialize as an array
    description: formData.description || '',
    notARobot: formData.notARobot || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setLocalFormData({ ...localFormData, [name]: checked });
    } else {
      setLocalFormData({ ...localFormData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageFiles = []; // Store File objects

    for (let i = 0; i < files.length; i++) {
      imageFiles.push(files[i]); // Add File object to array
    }

    setLocalFormData({ ...localFormData, propertyImages: imageFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the shared formData state with Owner data
    setFormData({ ...formData, ...localFormData });
    const formDataJSON = JSON.stringify({ ...formData, ...localFormData });

    try {
      const response = await fetch('/api/formData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: formDataJSON,
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form data submitted successfully!');
        // You might want to redirect or show a success message here
      } else {
        // Handle submission error
        console.error('Error submitting form data:', response.status);
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Step 5: Property Details</h2>
      <form className="row" onSubmit={handleSubmit}>
        {/* Left side: Image */}
        <div className="col-md-6 mb-3">
          <div className="mb-3">
            <label htmlFor="propertyImages" className="form-label">Property Images</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="propertyImages"
              name="propertyImages"
              multiple // Allow multiple file selection
              onChange={handleImageChange}
            />
            {localFormData.propertyImages.length > 0 && (
              <div className="mt-2">
                {localFormData.propertyImages.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Property Image ${index + 1}`}
                    className="img-fluid mb-2 rounded"
                    style={{ maxWidth: '200px' }} // Adjust width as needed
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Form inputs */}
        <div className="col-md-6">
          {/* Budget Range */}
          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="budgetRange" className="form-label">Budget Range</label>
              <input
                type="text"
                className="form-control"
                id="budgetRange"
                name="budgetRange"
                value={localFormData.budgetRange}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Extra Charge */}
          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="extraCharge" className="form-label">Do you take extra charge?</label>
              <select
                className="form-select"
                id="extraCharge"
                name="extraCharge"
                value={localFormData.extraCharge}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={localFormData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Not a Robot Checkbox */}
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notARobot"
                  name="notARobot"
                  checked={localFormData.notARobot}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notARobot">I am not a robot</label>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2" onClick={onBack}>Back</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Owner;