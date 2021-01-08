import React, { Component } from 'react'
import Header from '../components/Header';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Experiences from '../Pages/Experiences';
import axios from '../components/axios-base';
import Loader from '../components/Loader';
import {Route} from 'react-router-dom';

export class AppProfile extends Component {
    state = {
        userinfo: {},
        pages: [],
        skills: [],
        experiences: [],
        loader: true,
    }
    componentDidMount() {
        setTimeout(function () {
            axios.get('https://re-folio-default-rtdb.firebaseio.com/refolio/-MQ23yMm9j9RVGGEVSeU.json')
                .then(response => {
                    //console.log(response);
                    this.setState({
                        loader: false,
                        userinfo: response.data.userinfo,
                        pages: response.data.pages,
                        skills: response.data.skills,
                        experiences: response.data.experiences,
                    });
                })
        }.bind(this), 500);

    }

    render() {
        const userInfo = this.state.userinfo;
        let fullContent;
        let header;
        if(this.props.headerDisplay){
            header = <Header
            pages={this.state.pages}
            name={userInfo.name}
            email={userInfo.email}
            contact={userInfo.contact}
        />
        }
        if (this.state.loader) {
            fullContent = <Loader />
        } else {
            fullContent = <div>
                {header}
                <Route exact path="/" render={
                    () =>{
                        return <Projects onclickProjLink={this.props.onclickProject} />
                    }
                } />
                <Route path="/skills" render={
                    () => {
                        return <Skills skills={this.state.skills} />
                    }
                } />
                <Route path="/experiences" render={
                    () => {
                        return <Experiences />
                    }
                } />
                

            </div>


        }
        return (
            <React.Fragment>
                {fullContent}
            </React.Fragment>

        )
    }
}

export default AppProfile
