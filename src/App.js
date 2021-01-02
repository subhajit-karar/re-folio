import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
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
      {id:'pg1',linkText:'Projects',url:'/', homePage:true},
      {id:'pg2',linkText:'Skills',url:'/skills'},
      {id:'pg3',linkText:'Experiences',url:'/experiences'}
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
        <Router>
          <Header
            pages={this.state.pages}
            name={userInfo.name} 
            email={userInfo.email} 
            contact={userInfo.contact} 
            />
            <Route exact path="/" component={Projects} />
            <Route path="/skills" render={
              ()=>{
                return <Skills skills={this.state.skills} />
              }
            } />
            <Route path="/experiences" render={
              ()=>{
                return <Experiences />
              }
            } />
          </Router>
    )
  }
}

export default App

