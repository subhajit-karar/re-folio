
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/styles.css';
import profImg from './assets/img/profile.jpg';


class App extends Component {

  

  render() {
    return (
      <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <span className="d-none d-lg-block">
                     <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profImg} alt="" />
                  </span>
                  <span className="d-block text-uppercase font-weight-bold text-white">Subhajit Karar</span>
                  <span className="d-block text-white">+91-9836381324</span>
                  <span className="d-block text-white">subhajit.karar09@gmail.com</span>
               
               <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
               <div className="collapse navbar-collapse mt-5" id="navbarSupportedContent">
                   <ul className="navbar-nav">
                       <li className="nav-item"><a className="nav-link active" href="/">Projects</a></li>
                       <li className="nav-item"><a className="nav-link" href="/skills">Skills</a></li>
                       <li className="nav-item"><a className="nav-link" href="/experience">Experience</a></li>
                   </ul>
               </div>
           </nav>
          
           <div className="container-fluid p-0">
              <section className="resume-section">
                <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <div className="container projects">
                    <div className="row">
                        <div className="col-3">
                            <a href="#">
                            <i className="fa fa-list-ul"></i>
                            <h4 className="subheading">Todo List</h4>
                          </a>
                        </div>
                        <div className="col-3">
                            <a href="#">
                            <i className="fa fa-free-code-camp"></i>
                            <h4 className="subheading">Todo List</h4>
                          </a>
                        </div>
                        <div className="col-3">
                            <a href="#">
                            <i className="fa fa-list-ul"></i>
                            <h4 className="subheading">Todo List</h4>
                          </a>
                        </div>
                        <div className="col-3">
                            <a href="#">
                            <i className="fa fa-list-ul"></i>
                            <h4 className="subheading">Todo List</h4>
                          </a>
                        </div>
                        
                      </div>
                  </div>
                  </div>
               </section>
               
           </div>
          </React.Fragment>
    )
  }
}

export default App

