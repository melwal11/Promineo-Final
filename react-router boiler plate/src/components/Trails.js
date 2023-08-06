import React from 'react';
import TrailList from './components/TrailList';

import React from 'react';
import TrailList from './TrailList';

const Trails = ({ trails }) => {
  return (
    <div className="trails-container">
      <h2 className="trails-heading">Hiking Trails</h2>
      <TrailList trails={trails} />
    </div>
  );
};

export default Trails;