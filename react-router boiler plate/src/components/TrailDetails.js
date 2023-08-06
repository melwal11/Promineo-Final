import React from 'react';

const TrailDetails = ({ trail }) => {
  return (
    <div>
      <h2>{trail.name}</h2>
      <p>Location: {trail.location}</p>
      <p>Difficulty: {trail.difficulty}</p>
      <p>Description: {trail.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TrailDetails;
