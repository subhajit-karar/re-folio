import React from 'react';
import Logo from '../../assets/save.png';
import {NavLink} from 'react-router-dom';


const header = (props) => {
    return(
        <header className="blog-header py-3">
            <div className="container">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-3 mb-3">
                <NavLink exact to="/projects/shoppingCart" >
                    <img src={Logo} alt="logo" height="100" />
                </NavLink>
              </div>
              {/* <div className="col-6 text-center">
              <div className="search-controls">
                    
                    <div className="nav-fill">
                       <input type="hidden" id="searchTextHolder_val" value="Keyword / Part #" />
                        
                        
                        <input autoComplete="off" type="text" className="search-txt" name="st" id="SimpleSearchForm_SearchTerm" placeholder="Keyword / Part #" size="18"  />
                        
                    </div>
                    <div className="nav-right">
                       <button type="submit" className="search-btn" id="searchMain">
                            Search
                        </button>
                    </div>
                </div>
              </div> */}
              <div className="col-3 d-flex justify-content-end align-items-center">
                
                <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>

                <span>{props.count} Items <br/>
                    <strong>{props.total}</strong></span>
                

              </div>
            </div>
            </div>
            <div className="mainMenu container-fluid">
            <nav className="container">
                <ul>
                    <li><a href="/projects/shoppingCart">Menu</a></li>
                    <li><a href="/projects/shoppingCart">Will</a></li>
                    <li><a href="/projects/shoppingCart">Come</a></li>
                    <li><a href="/projects/shoppingCart">Here</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default header;
