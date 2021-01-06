import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import ProjectProfile from './components/ProjectProfile';
import AppProfile from  "./components/AppProfile";


class App extends Component {  
 
  render() {
    return(
        <React.Fragment>
          <ProjectProfile />
          <AppProfile />
        </React.Fragment>
    );

    
  }
}

export default App

