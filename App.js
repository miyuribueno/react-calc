import React from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Operators from './components/Operators';

class App extends React.Component {

  state = {
    numberClicked: '',
    operator: '',
    left: '',
    prevCalc: '',
    output: ''
  }

  buttons = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 0];
  operators = ['+', '-', 'x', '/'];

  numberBtnClickHandler = (e) => {
    this.setState({
      numberClicked: this.state.numberClicked + e.target.textContent
    })
  }

  operatorClickHandler = (e) => {
    this.setState({
      operator: e.target.textContent,
      left: this.state.numberClicked,
      prevCalc: this.state.prevCalc + this.state.numberClicked + e.target.textContent,
      numberClicked: '',
    })
    if(this.state.prevCalc !== ''){
      this.solve()
    }
  }

  clearClickHandler = () => {
    this.setState({
      numberClicked: '',
      operator: '',
      left: '',
      prevCalc: '',
      output: ''
    })
  }

  solve = () => {
    let result;
    switch(this.state.operator) {
      case '+':
        result = this.state.left*1 + this.state.numberClicked*1;
        break;
      case '-':
        result = this.state.left*1 - this.state.numberClicked*1;
        break;  
      case 'x':
        result = this.state.left*1 * this.state.numberClicked*1;
        break;
      case '/':
        result = this.state.left*1 / this.state.numberClicked*1;
        break;
      default:
        return "error";  
    }

    this.setState({
      output: result,
    })
  }
  
  render(){
    const numbers = this.buttons.map ((num) => {
      return <Buttons btnNum={num} clicked={this.numberBtnClickHandler}/>
    })

    const ops = this.operators.map ((ops) => {
      return <Operators btnOps={ops} clicked={this.operatorClickHandler} />
    })

      return (
        <div className="App"> 
          <div id="output"> 
          <div>{this.state.prevCalc}</div>
            <div>{this.state.numberClicked}</div>
            <div>= {this.state.output}</div>
            
          </div>
          <div id="numBtns">
            {numbers}
          </div>
          <div id="opsBtns">
            {ops}
            <button onClick={this.solve}>=</button>
          </div>
          <div id="clearBtn"><button onClick={this.clearClickHandler}>CLEAR</button></div>
        </div>
      )
  };
  
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import Digit from './Digit/Digit';
// import OperationKey from './OperationKey/OperationKey';

// class App extends Component {

//   state = {
//     result: 0,
//     currentInput: 0,
//     previousInput: 0,
//     currentOperation: null
//   }

//   digits = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 0];
//   operations = ['+', '-', 'x', '/'];

//   operationClickHandler = (operation) =>{
//     const newState = {
//       ...this.state
//     }
//     newState.previousInput = newState.currentInput;
//     newState.currentInput = 0;
//     newState.currentOperation = operation;

//     if (newState.currentOperation) {
//       newState.result = this.performOperation()
//       newState.firstInput = newState.result;
//     }    

//     this.setState(newState);
//   }

//   performOperation = () =>{
//     switch (this.state.currentOperation) {
//       case '+':
//         return this.state.currentInput + this.state.previousInput;
//       case '-':
//         return this.state.previousInput - this.state.currentInput;
//       case 'x':
//         return this.state.currentInput * this.state.previousInput;
//       case '/':
//         return this.state.previousInput / this.state.currentInput;
//     }
//   }
  

//   digitClickedHandler = (number) =>{
//     let input = number;
//     if ( this.state.currentInput !== 0 ){
//       input = parseInt(`${this.state.currentInput}${input}`);
//     }

//     this.setState({
//       currentInput: input,
//     });
//   }

//   render(){

//     const digitsKeys = this.digits.map(digit => {
//       return <Digit key={digit} clicked={() => this.digitClickedHandler(digit)}>{digit}</Digit>
//     }); 

//     const operationKeys = this.operations.map(operation => {
//       return <OperationKey key={operation} clicked={() => this.operationClickHandler(operation)}>{operation}</OperationKey>
//     });

//     return (
//       <div className="App">
//         <div>Result: {this.state.result}</div>
//         <div>First Input: {this.state.currentInput}</div>
//         <div>Operation: {this.state.currentOperation}</div>
//         <div>Second Input: {this.state.previousInput}</div>
//         <div>{digitsKeys}</div>
//         <div>
//           {operationKeys}
//         </div>
//       </div>
//     );
//   }
  
// }

// export default App;
