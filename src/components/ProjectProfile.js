import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import ShoppingCart from '../Projects/Shoppingcart/ShoppingCart';
import Todo from '../Projects/Todo/Todo';
import Calculator from '../Projects/Calculator/Calculator';


export class ProjectProfile extends Component {
    
    render() {
        return (
            <React.Fragment>
               <Link onClick={()=>{this.props.onclickProject()}} to='/'>&#8592;Back to Projects</Link>
               <Route exact path="/projects/shoppingCart" component={ShoppingCart} />
               <Route exact path="/projects/todo" component={Todo} />
               <Route exact path="/projects/calculator" component={Calculator} />
            </React.Fragment>
        )
    }
}

export default ProjectProfile
