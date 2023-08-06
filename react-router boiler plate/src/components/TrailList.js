import React from 'react';
import { Link } from 'react-router-dom';

const TrailList = ({ trails }) => {
  return (
    <ul>
      {trails.map((trail) => (
        <li key={trail.id}>
          <Link to={`/trails/${trail.id}`}>{trail.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrailList;
