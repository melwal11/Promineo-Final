import React, { useState } from 'react';

const AddTrailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    difficulty: '',
    description: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new trail object with the form data
    const newTrail = {
      id: trailData.length + 1, // Generate a unique ID (in a real app, this should be handled by the backend)
      ...formData,
    };

    // Update the state with the new trail
    setTrailData([...trailData, newTrail]);
    setFormData({
      name: '',
      location: '',
      difficulty: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Add a New Trail</h2>
      <form onSubmit={handleSubmit}>
        {/* Form elements for adding a new trail */}
      </form>
    </div>
  );
};

export default AddTrailForm;
