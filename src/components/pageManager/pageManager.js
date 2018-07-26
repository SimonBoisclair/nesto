import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import Login from '../login/login.js';
import AlbumsAndPosts from '../albumsAndPosts/albumsAndPosts.js';

class Content extends Component {
  render() {
    return (
      <div id="app">
        <Route exact path='/' render={()=><Login/>}/>
        <Route path='/AlbumsAndPosts' render={()=><AlbumsAndPosts/>}/>        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
})

let ReduxShell = connect(mapStateToProps)(Content)
let RouterShell = withRouter(ReduxShell);  
export default RouterShell; 
