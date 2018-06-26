import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const loremIpsum = "lorem ipsum lumba limby supim uspim remsum"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loremIpsum: loremIpsum.split(' '),
      clickTimes: 0
    }
  }

  handleClick = () => {
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
    const { loremIpsum, clickTimes } = this.state

    return (
      <div className="App">
        <div>Clicks: {clickTimes}</div>
        <div>Lorem Ipsum: {loremIpsum.join(' ')}</div>
      </div>
    );
  }
}

export default App;
