import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Clear } from "./components/Clear";
import * as math from "mathjs";
document.body.style.backgroundColor = "Black";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addInput = inn => {
    this.setState({input: this.state.input + inn});
  }

  equals = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  clears = () => {
    this.setState({input: ""})
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Input input={this.state.input}>1</Input>
          <div className="row">
            <Button handleClick={this.addInput}>7</Button>
            <Button handleClick={this.addInput}>8</Button>
            <Button handleClick={this.addInput}>9</Button>
            <Button handleClick={this.addInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>4</Button>
            <Button handleClick={this.addInput}>5</Button>
            <Button handleClick={this.addInput}>6</Button>
            <Button handleClick={this.addInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>1</Button>
            <Button handleClick={this.addInput}>2</Button>
            <Button handleClick={this.addInput}>3</Button>
            <Button handleClick={this.addInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>0</Button>
            <Button handleClick={this.addInput}>.</Button>
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.addInput}>+</Button>
          </div>
          <div className="row">
            <Clear handleClick={this.clears}>
              Clear
            </Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
