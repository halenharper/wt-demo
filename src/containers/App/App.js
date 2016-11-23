import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <br />
          <RaisedButton href="/chat" label="Chat" onTouchTap={null}/>&nbsp;
          <RaisedButton href="/message" label="Message" />
          <br />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
