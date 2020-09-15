import React from 'react';
import Nav from './components/Nav/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Info from './pages/Info'
import './App.css';

function App() {
  return (
    <Router>
      <div className='main'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/info' component={Info} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
