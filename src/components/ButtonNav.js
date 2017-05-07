
/*
======================================================================================================
BUTTON NAV: The button nave loads a button object array and produces
======================================================================================================
*/

import React, { Component } from 'react';

class NavBar extends Component {

  //Call the parent component loader
  handleClick(e){
    this.props.loadComponentById(e);

  }

  render () {

    //Change the button navigation in components/MenuDefinition.js
    let btnObjArray=this.props.menu;

    //Note: The nav output will produced the elements without spaces between them. Use CSS to create margins.
    var navButtons = btnObjArray.map(function(nb) {
      return (
        <button key={nb.comp} id={nb.comp} >{nb.name}</button>
      );
    })

    //Build the nav, with navButtons map result. onClick calls the local handleClick
    return <nav onClick={this.handleClick.bind(this)}>{navButtons}</nav>;
  }
}

module.exports = NavBar;
