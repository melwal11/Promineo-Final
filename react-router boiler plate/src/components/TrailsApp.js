// src/components/TrailsApp.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trails from './components/Trails';
import FeaturedTrail from './components/FeaturedTrail';
import NotFound from './components/NotFound';
import trails from '../data/sampleData';

const TrailsApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/trails"
          render={() => <Trails trails={trails} />}
        />
        <Route
          exact
          path="/trails/:id"
          render={(props) => {
            const trailId = parseInt(props.match.params.id);
            const trail = trails.find((trail) => trail.id === trailId);
            return trail ? (
              <FeaturedTrail trail={trail} />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route component={NotFound} />
      </Switch>
      {/* Add the Footer component here if you haven't already */}
    </Router>
  );
};

export default TrailsApp;
