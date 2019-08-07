import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import Home from './views/Home';
import ImageInput from './views/ImageInput';
import VideoInput from './views/VideoInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={ImageInput} />
            <Route exact path="/camera" component={VideoInput} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;