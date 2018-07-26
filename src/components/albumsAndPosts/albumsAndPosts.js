import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Albums from './albums/albums.js'
import Posts from './posts/posts.js'

import getApiData from '../../publicActions/getApiData.js'

class Content extends Component {

  async componentWillMount (){
    this.props.dispatch({type:"LOAD_ALBUMS_AND_POSTS",payload: await getApiData()})
  }

  render() {
    // if we are not logged in, go back to login page
    if(this.props.nav.logged !== true){
      setTimeout(()=>{this.props.history.push('/')},3000)
      return(
        <h1>
          You are not logged in, you'll be redirect to login
        </h1>
      )
    }
    
    return (
      <div id="AlbumsAndPosts">
          <Albums/>
          <Posts/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nav : state.nav
})

let ReduxShell = connect(mapStateToProps)(Content)
let RouterShell = withRouter(ReduxShell);  
export default RouterShell;