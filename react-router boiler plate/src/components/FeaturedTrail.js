import React from 'react';
import TrailDetails from './TrailDetails';

const FeaturedTrail = ({ trail }) => {
  return (
    <div className="featured-container">
      <h2 className="featured-heading">Featured Trail</h2>
      {trail ? <TrailDetails trail={trail} /> : <p>Trail not found</p>}
    </div>
  );
};

export default FeaturedTrail;
