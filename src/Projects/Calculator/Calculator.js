import React, { Component } from 'react';
import KeypadNumber from './Components/KeypadNumber';
import ResultDisplay from './Components/ResultDisplay';
import './calculator.scss'


export class Calculator extends Component {
  
    state={
        result:0,
        question:null,
        keys:[1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'.','CE','/','Clr','=']
    }
    trigger = (e) =>{
       
        if(e === "="){
           this.calculate();
        }
        else if(e === "Clr"){
            this.reset()
        }
        else if(e === "CE"){
            this.backspace()
        }
        
        else {
           
            this.setState({
                result: this.state.result + e
            })
        }


       //this.setState({question:(this.state.question === null)?e:this.state.question+e});
    }
    calculate = () => {
        
        try {    
            this.setState({
                // eslint-disable-next-line
                result: eval(this.state.result.replace(/^0+/, ''))
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: 0
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="container text-center">
                <div className="bg-primary text-white rounded mb-3">This is simple Calculator, Dont try something extra :)</div>
                <h3 className="mb-5">Calculator</h3>
                
                <div className="col-lg-3 col-md-4 mx-auto calculatorCont">
                    
                   <ResultDisplay question={this.state.question} result={this.state.result} />
                   <KeypadNumber trigger={this.trigger} keys={this.state.keys} />
                </div>
            </div>
        )
    }
}

export default Calculator
