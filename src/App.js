import React, { Component } from 'react';

import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeypadComponent";


class App extends Component {
  constructor(){
    super();

    this.state = {
        result: "" ,
        equation:""
    }
}

onClick = button => {

  if(button === "="){
      this.calculate()
  }

  else if(button === "C"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      /*this.setState({ 
      result: this.state.result + button
      })*/

  }
};
addequation =(event) =>
{
  const value = event.target.name;
  this.setState({
    equation: this.state.equation+value,
    result: value,
  })
}

calculate = () => {
  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.equation) || "" ) + "",
          equation:""
          
      })
  } catch (e) {
      this.setState({
          result: "error"
      })

  }
};

reset = () => {
  this.setState({
      result: ""
  })
};
 
backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};
  render() {
    return (
      <div style={{ margin:'auto', width:'25%'}}>
        <div className="result">
                <p>{this.state.result}</p>
        </div>
      <div className="button">
      <button className="btn btn-danger button-calculator" name="CE" onClick={this.backspace}>CE</button>
                <button name="(" onClick={this.addequation}>(</button>
                <button name=")" onClick={this.addequation}>)</button>
                
                <button className="btn btn-danger button-calculator" name="C" onClick={this.reset}>C</button><br/>


                <button name="1" onClick={this.addequation}>1</button>
                <button name="2" onClick={this.addequation}>2</button>
                <button name="3" onClick={this.addequation}>3</button>
                <button className="btn btn-primary button-calculator" name="+" onClick={this.addequation}>+</button><br/>


                <button name="4" onClick={this.addequation}>4</button>
                <button name="5" onClick={this.addequation}>5</button>
                <button name="6" onClick={this.addequation}>6</button>
                <button className="btn btn-primary button-calculator" name="-" onClick={this.addequation}>-</button><br/>

                <button name="7" onClick={this.addequation}>7</button>
                <button name="8" onClick={this.addequation}>8</button>
                <button name="9" onClick={this.addequation}>9</button>
                <button className="btn btn-primary button-calculator" name="*" onClick={this.addequation}>x</button><br/>


                <button name="." onClick={this.addequation}>.</button>
                <button name="0" onClick={this.addequation}>0</button>
                <button className="btn btn-success button-calculator" name="=" onClick={this.calculate}>=</button>
                <button className="btn btn-primary button-calculator" name="/" onClick={this.addequation}>÷</button><br/>
            </div>
  </div>
    );
  }
}

export default App;
