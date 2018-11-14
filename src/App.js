import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input"
import { Clear } from "./components/Clear"

// this.state{
//   input=""
// }

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Input>1</Input>
          <div className="row">
            <Button> 7 </Button>
            <Button> 8 </Button>
            <Button> 9 </Button>
            <Button> / </Button>
          </div>
          <div className="row">
            <Button> 4 </Button>
            <Button> 5 </Button>
            <Button> 6 </Button>
            <Button> * </Button>
          </div>
          <div className="row">
            <Button> 1 </Button>
            <Button> 2 </Button>
            <Button> 3 </Button>
            <Button> - </Button>
          </div>
          <div className="row">
            <Button> 0 </Button>
            <Button> . </Button>
            <Button> = </Button>
            <Button> + </Button>
          </div>
          <div className="row">
            <Clear>
              Clear
            </Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
