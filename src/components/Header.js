import React from 'react';
import profImg from '../assets/img/profile.jpg';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <span className="d-none d-lg-block">
                     <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profImg} alt="" />
                </span>
                <span className="d-block text-uppercase font-weight-bold text-white">{props.name}</span>
                <span className="d-block text-white">{props.contact}</span>
                <span className="d-block text-white">{props.email}</span>
               
               <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
               <div className="collapse navbar-collapse mt-5" id="navbarSupportedContent">
                   <ul className="navbar-nav">
                       <li className="nav-item"><a className="nav-link active" href="/">Projects</a></li>
                       <li className="nav-item"><a className="nav-link" href="/skills">Skills</a></li>
                       <li className="nav-item"><a className="nav-link" href="/experience">Experience</a></li>
                   </ul>
               </div>
           </nav>
    )
}

export default Header;
