import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const loremIpsum = "lorem ipsum lumba limby supim uspim remsum"

class App extends Component {

  /*
    Break problem into parts -
    Part 1: Create a clicker, and visual aid to represent incrementing values
    Part 2: Clicker should restart given some condition, this should be implemented and visual
    Part 3:
    on browser click,
    count clickTimes,
    use clickTimes to slice loremIpsum array
    update counter to 0 if it exceeds array.length
  */

  constructor(props) {
    super(props)

    this.state = {
      loremIpsum: loremIpsum.split(' '),
      clickTimes: 0
    }
  }

  handleClick = (target) => {
    const splitLorem = loremIpsum.split(' ')
    const { clickTimes } = this.state

    if (clickTimes === splitLorem.length) {
      this.setState({ clickTimes: 0 })
    }

    this.setState((prevState) => {
      return {
        clickTimes: prevState.clickTimes + 1 ,
        loremIpsum: splitLorem.slice(0, clickTimes)
      }

    })
  }

  componentDidMount() {
    document
    .querySelector('html')
    .addEventListener('click', this.handleClick )
  }


  render() {
    return (
      <div id="greeting" className="App">
        <div>Clicks: {this.state.clickTimes}</div>
        <div>Lorem Ipsum: {this.state.loremIpsum.join(' ')}</div>
      </div>
    );
  }
}

export default App;
