import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count : 10000,
  }
  banners = () => {
    const banners = [];
    const {count} = this.state;
    for(let i=0; i< count; i++){
      banners.push(<h1 className="App-title" key={i}>Welcome to React-  {i} </h1>)
    }
    return banners
  }
  
  // targetHeight= 0;
  animatedScrollTop = (targetHeight) => {
    targetHeight = targetHeight || 0;
    function animatedScroll(){
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > targetHeight) {
        window.scrollTo(0, currentScroll - currentScroll / 5);
        window.requestAnimationFrame(animatedScroll);
      }
    }
    window.requestAnimationFrame(animatedScroll);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.banners()
        }
        <p className="App-intro">
          To get startstamped, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="float-btn" onClick={this.animatedScrollTop.bind(this,1000)}>TOP</div>
      </div>
    );
  }
}

export default App;
