import React from 'react';
import profImg from '../assets/img/profile.jpg';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const pages = props.pages.map((page)=>{
        return (
            <li className="nav-item" key={page.id}>
                <NavLink exact={page.homePage? true:false} className="nav-link" activeClassName="active" to={page.url}>
                    {page.linkText}
                </NavLink>
            </li>
        );
    });
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
                       {pages}
                   </ul>
               </div>
           </nav>
    )
}

export default Header;
