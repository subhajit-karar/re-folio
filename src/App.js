import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import ProjectProfile from './components/ProjectProfile';
import AppProfile from  "./components/AppProfile";
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {  
 state = {
   headerDisplay:true,
 }
 projectModeSwitch = () =>{
   this.setState({headerDisplay:!this.state.headerDisplay});
 }
 componentDidMount(){
  if(window.location.pathname.indexOf('/projects/') === 0){
    this.setState({headerDisplay:false});
    console.log('hello');
  }
 }
  render() {
    
    return(
        <Router>
          <ProjectProfile onclickProject={this.projectModeSwitch} />
          <AppProfile headerDisplay={this.state.headerDisplay} onclickProject={this.projectModeSwitch} />
        </Router>
    );

    
  }
}

export default App

