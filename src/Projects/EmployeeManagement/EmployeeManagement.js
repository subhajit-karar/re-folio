import React, { Component } from 'react';
//import EmployeDetails from "./"
import EmployeDetails from "./Components/EmployeDetails"

export class EmployeeManagement extends Component {
    render() {
        return (
            <div className="container text-center">
                <h2 className="mb-5">Employee Managenemt</h2>
                
                   <EmployeDetails /> 
                
            </div>
        )
    }
}

export default EmployeeManagement

