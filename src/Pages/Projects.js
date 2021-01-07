import React, { Component } from 'react';
import '../assets/css/styles.scss';
import PageHOC from './PageHOC';
import axios from '../components/axios-base';
import Loader from '../components/Loader';
import {Link} from 'react-router-dom'



export class Projects extends Component {
    state={
        projects:[],
        loader:true,
    }
    componentDidMount(){
        setTimeout(function(){
            axios.get('https://re-folio-default-rtdb.firebaseio.com/refolio/-MQ23yMm9j9RVGGEVSeU.json')
            .then(response=>{
                console.log(response);
                this.setState({
                    loader:false,
                    projects: response.data.projects
                });
            })
        }.bind(this), 500);
    }

    render() {
      let projectContent;
      if(this.state.loader){
        projectContent = <Loader />
      }else{
        projectContent = this.state.projects.map((project)=>{
            return (
              <div className="col-3" key={project.id}>
                  <Link onClick={()=>{this.props.onclickProjLink()}} to={project.url}>
                    <i className={project.iconClass}></i>
                    <h4 className="subheading">{project.name}</h4>
                  </Link>
              </div>
            );
        });
      }

        return (
            <PageHOC heading="projects">
                {projectContent}
            </PageHOC>
        )
    }
}

export default Projects
