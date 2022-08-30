import React, { Component, Fragment } from "react";
import Showsqueres from "./squares";
import UpdateData from "./update";
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <header className="App">
            <h2>Name : Khanthamalee Na-udom</h2>
            <a href="https://khanthamalee.github.io/9-randomcolourssquares-Post-to-API/">
                <button class="bubbly-button" >Random-colours</button></a>
          </header>
        </div>
 
        <Showsqueres  />
        <UpdateData />
      </Fragment>
    );
  }
}

export default App;
  
    