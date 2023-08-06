// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trails from './components/Trails';
import FeaturedTrail from './components/FeaturedTrail';
import AddTrail from './components/AddTrail'; 
import EditTrail from './components/EditTrail'; 
import NotFound from './components/NotFound';
import { ModalFooter } from 'react-bootstrap';

const App = () => {
  const [trailData, setTrailData] = useState(trails);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trails" render={() => <Trails trails={trailData} />} />
        <Route
          exact
          path="/trails/:id"
          render={(props) => {
            const trailId = parseInt(props.match.params.id);
            const trail = trailData.find((trail) => trail.id === trailId);
            return trail ? (
              <FeaturedTrail trail={trail} />
            ) : (
              <NotFound />
            );
          }}
        />
        <Route component={NotFound} />
      </Switch>
      {ModalFooter}
    </Router>
  );
};

export default App;

