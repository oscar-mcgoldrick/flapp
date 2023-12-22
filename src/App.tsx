import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async getDataFetch(){
    const response = await fetch("/api");
    const movies = await response.text()
    console.log(movies);
  }

componentDidMount() {
  this.getDataFetch()
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            boomba
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
