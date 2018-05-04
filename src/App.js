import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import './App.css';
import LoginScreen from './containers/LoginScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Redirect to="/login" />}/>
          <Route exact path='/login' component={ LoginScreen }/>
        </Switch>
      </div>
    );
  }
}

export default App;
