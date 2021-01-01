import React, { Component } from 'react';
import '../assets/css/styles.css';

export class Projects extends Component {
    state={
        projects:[
            {name: 'Todo List', iconClass:'fa fa-list-ul', url:'/todo'},

        ]
    }

    render() {
        return (
            <div className="container-fluid p-0">
              <section className="resume-section">
                <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <div className="container projects">
                    <div className="row">
                        <div className="col-3">
                            <a href="/todo">
                            <i className="fa fa-list-ul"></i>
                            <h4 className="subheading">Todo List</h4>
                          </a>
                        </div>
                        <div className="col-3">
                            <a href="/shoppingCart">
                            <i className="fa fa-shopping-cart"></i>
                            <h4 className="subheading">Shoppping Cart</h4>
                          </a>
                        </div>
                        <div className="col-3">
                            <a href="/calculator">
                            <i className="fa fa-calculator"></i>
                            <h4 className="subheading">Calculator</h4>
                          </a>
                        </div>
                        
                      </div>
                  </div>
                  </div>
               </section>
               
           </div>
        )
    }
}

export default Projects
