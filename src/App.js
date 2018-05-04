import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import './App.css';
import LoginScreen from './containers/LoginScreen';
import ArticleComponent from './containers/ArticleComponent';
import AuthRoute from './AuthRoute';
import HomeScreen from './containers/HomeScreen';
import AboutUsComponent from './containers/AboutUsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Redirect to="/login" />}/>
          <Route path='/login' component={ LoginScreen }/>
          <Route path='/articles' component={ArticleComponent} />
          <Route path='/home' component={HomeScreen} />
          <Route path='/aboutus' component={AboutUsComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
