import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrackingForm from './components/TrackingForm';
import TrackingInfo from './components/TrackingInfo';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TrackingForm} />
          <Route path="/tracking-info/:trackingNumber" component={TrackingInfo} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
