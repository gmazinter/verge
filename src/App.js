import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
// import TORView from './components/TreeOfResults/TORView';
import Topic from './components/TreeOfResults/Topic';
import WikiView from './components/TreeOfResults/ContextMenu/WikiView';


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Topic />
        </div>
      </Router>
    );
  }
}

export default App;