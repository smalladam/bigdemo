import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import AppLeftNav from './AppLeftNav'

class Header extends Component {
  _onLeftIconButtonTouchTap() {
    this.refs.LeftNav.handleToggle();
  }

  render(){
    let styles={
      root:{
        padding:"0px",
        margin:'0px',
        textAlign:'center',
        color:'#fff',
        backgroundColor:'#212121',
      },
    }
    return (
      <div style={styles.root}>
        <AppLeftNav ref='LeftNav' />
        <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}/>
      </div>
    );
  }
}

export default Header;
