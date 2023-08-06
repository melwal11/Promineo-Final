import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Hiking Trails App</h1>
      <p>Explore and discover amazing hiking trails!</p>
      <Link to="/trails" className="home-link">View All Trails</Link>
    </div>
  );
};

export default Home;

