import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import ProjectProfile from './components/ProjectProfile';
import AppProfile from  "./components/AppProfile";
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {  
 
  render() {
    return(
        <Router>
          <ProjectProfile />
          <AppProfile />
        </Router>
    );

    
  }
}

export default App

