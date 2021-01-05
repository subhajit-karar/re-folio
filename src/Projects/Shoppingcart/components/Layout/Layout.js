import React from 'react';
import Header from '../Header/Header';
//import Auxilary from '../../hoc/Auxilary';

const layout = (props) => {
    return(
        <div className="container">
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default layout;
