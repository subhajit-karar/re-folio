import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import Header from './components/Header';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Experiences from './Pages/Experiences';



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
      {id:'sk1',skill:'React,Redux',mark:'70%'},
      {id:'sk2',skill:'JavaScript,VanillaJS',mark:'70%'},
      {id:'sk3',skill:'Html5',mark:'80%'},
      {id:'sk4',skill:'Css3',mark:'80%'},
      {id:'sk5',skill:'Bootstrap',mark:'80%'},
      {id:'sk6',skill:'Css(sass/less)',mark:'80%'},      
      {id:'sk7',skill:'Wordpress',mark:'70%'},
      {id:'sk8',skill:'RESTful API',mark:'60%'},
      {id:'sk9',skill:'Magento Front-End',mark:'60%'},
      {id:'sk10',skill:'Dojo',mark:'70%'},
      {id:'sk11',skill:'Photoshop',mark:'60%'},
      {id:'sk12',skill:'Source control tools (Git, SVN etc)',mark:'70%'},      
      {id:'sk13',skill:'Project Management Tools (Jira, Asana etc.)',mark:'70%'},
    ],
    experiences:[
      {company:'',position:[
        {}
      ]},
      
    ]
    
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

            <Projects />
            <Skills skills={this.state.skills} />
            <Experiences  />
           
           
      </React.Fragment>
    )
  }
}

export default App

