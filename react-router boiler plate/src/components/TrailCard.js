import React from 'react';

const TrailCard = ({ trail }) => {
  return (
    <div>
      <h3>{trail.name}</h3>
      <p>Location: {trail.location}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TrailCard;