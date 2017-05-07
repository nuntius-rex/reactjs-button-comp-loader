import React, { Component } from 'react';

class Intro extends Component {
  render(){
    return(
      <div>
        <h1>Welcome to the ReactJS Button Comp Loader!</h1>
        <p>Thanks for your interest in this app! I hope it is helpful to you. The primary purpose of this app is to load components by button selection.
        The foundation of this app was started with create-react-app, so most directories are the same, save the addition of components, img, and styles folder.
        I then moved the various related files into those folders and that is about it!</p>
        <p><small>This app was written by Dan Guinn: <a href="http://danguinn.com">danguinn.com</a>.</small></p>
      </div>
    );
  }
}

/* Export the Intro Object if this file is included.*/
module.exports = Intro;
