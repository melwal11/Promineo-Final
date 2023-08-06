import React, { useState } from 'react';

const EditTrailForm = ({ trail }) => {
  const [formData, setFormData] = useState({
    name: trail.name,
    location: trail.location,
    difficulty: trail.difficulty,
    description: trail.description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the index of the trail in the state
    const trailIndex = trailData.findIndex((t) => t.id === trail.id);

    if (trailIndex !== -1) {
      // Update the trail with the edited data
      const updatedTrail = { ...trailData[trailIndex], ...formData };
      const updatedTrailData = [...trailData];
      updatedTrailData[trailIndex] = updatedTrail;
      setTrailData(updatedTrailData);
    }
  };

  return (
    <div>
      <h2>Edit Trail: {trail.name}</h2>
      <form onSubmit={handleSubmit}>
        {/* Form elements for editing the trail */}
      </form>
    </div>
  );
};

export default EditTrailForm;
