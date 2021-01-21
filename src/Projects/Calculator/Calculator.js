import React, { Component } from 'react';
import KeypadNumber from './Components/KeypadNumber';
import ResultDisplay from './Components/ResultDisplay';
import './calculator.scss'


export class Calculator extends Component {
  
    state={
        result:0,
        question:null,
        keys:[1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'Clr','/','=']
    }
    calculate = (e) =>{
       
       if(e==="="){
           
       }else{
        this.setState({question:(this.state.question === null)?e:this.state.question+e});
       }
    }

    render() {
        return (
            <div className="container text-center">
                <div className="bg-danger text-white rounded mb-3">Work in progress, design completes, functionality in progress</div>
                <h3 className="mb-5">Calculator</h3>
                
                <div className="col-lg-3 col-md-4 mx-auto calculatorCont">
                    
                   <ResultDisplay question={this.state.question} result={this.state.result} />
                   <KeypadNumber trigger={this.calculate} keys={this.state.keys} />
                </div>
            </div>
        )
    }
}

export default Calculator
