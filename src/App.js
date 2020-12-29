import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import Header from './components/Header';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills'


class App extends Component {
  
  state = {
    userinfo: {
      name:'Subhajit Karar', 
      email: 'subhajit.karar09@gmail.com', 
      contact:'+91-9836381324'},
    pages:[
      {id:'pg1',linkText:'Projects',url:''},
      {id:'pg2',linkText:'Skills',url:''},
      {id:'pg3',linkText:'Experiences',url:''}
    ],
    skills: [
      {id:'sk1',skill:'React',mark:'70%'},
      {id:'sk2',skill:'Dojo',mark:'60%'},
      {id:'sk3',skill:'Html5',mark:'80%'}
    ],
    
  }
  
  render() {
    const userInfo = this.state.userinfo;
    return (
      <React.Fragment>
          <Header
            pages={this.state.pages}
            name={userInfo.name} 
            email={userInfo.email} 
            contact={userInfo.contact} />
            {/* <Projects /> */}
            <Skills />
           
      </React.Fragment>
    )
  }
}

export default App

