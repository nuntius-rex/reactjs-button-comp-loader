import React, { Component } from 'react';

// eslint-disable-next-line
import style from './styles/App.css';
import logo from './img/logo.svg';

//===============================================
// Load Default System Components
//===============================================
var Nav = require('./components/ButtonNav');
var MenuDef = require('./components/MenuDefinition');
// eslint-disable-next-line
var Intro = require('./components/Intro');

//===============================================
// Load the main App Component
//===============================================

class App extends Component {

  constructor() {
    super();
    this.state = {
      CompContent: Intro //Load the Intro text
    };
  }

  // This is the component loader. When passed the id field,
  // it sets the state to the required component.
  loadComponentById(e){
    var comp = e.target.id;
    this.setState({
      CompContent: require('./components/'+comp)
    });
  }

  render() {
    // The Content variable holds the CompContent which is loaded in <Content />
    var Content = this.state.CompContent;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS Button Component Loader</h1>
        </div><br/>
        <Nav loadComponentById={this.loadComponentById.bind(this)} menu={MenuDef} />
        <Content />
      </div>
    );
  }
}


export default App;
