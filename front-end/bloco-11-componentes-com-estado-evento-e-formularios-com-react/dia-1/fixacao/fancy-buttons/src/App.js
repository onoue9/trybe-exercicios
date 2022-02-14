import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
      firstButtonClicks: 0,
      secondButtonClicks: 0,
      thirdButtonClicks: 0,
    }

    this.firstClick = this.firstClick.bind(this);
    this.secondClick = this.secondClick.bind(this);
    this.thirdClick = this.thirdClick.bind(this);
  }

  firstClick() {
    this.setState((previousState, _props) => ({ firstButtonClicks : previousState.firstButtonClicks + 1 }))
    console.log(this.state.firstButtonClicks + 1);
    if ((this.state.firstButtonClicks + 1) % 2 === 0) return console.log('verde');
  }
  
  secondClick() {
    this.setState((previousState, _props) => ({
      secondButtonClicks : previousState.secondButtonClicks + 1
    }))
    if ((this.state.secondButtonClicks + 1) % 2 === 0) return console.log('verde');
  }
  
  thirdClick() {
    this.setState((previousState, _props) => ({
      thirdButtonClicks : previousState.thirdButtonClicks + 1
    }))
    if ((this.state.thirdButtonClicks + 1) % 2 === 0) return console.log('verde');
  }

  render () {
    return (
      <div>
        <button onClick={this.firstClick}>{this.state.firstButtonClicks}</button>
        <button onClick={this.secondClick}>{this.state.secondButtonClicks}</button>
        <button onClick={this.thirdClick}>{this.state.thirdButtonClicks}</button>
      </div>
    );
  }
}

export default App;
