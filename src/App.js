import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
        <div className="row">
          <Button> 7 </Button>
          <Button> 8 </Button>
          <Button> 9 </Button>
        </div>
        <div className="row">
          <Button> 4 </Button>
          <Button> 5 </Button>
          <Button> 6 </Button>
        </div>
        <div className="row">
          <Button> 1 </Button>
          <Button> 2 </Button>
          <Button> 3 </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;