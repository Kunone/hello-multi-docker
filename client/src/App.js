import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>Welcome here</h1>
            <Link to='/'>Home</Link>
            <Link to='/other'>Other Page</Link>
          </header>
          <div>
            <Route exact path='/' component={Fib} />
            <Route exact path='/other' component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
