import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email : "info@info.com",
      password : "111"
    }
  }
  
  loginIn = async () => {
    await this.props.dispatch({
      type:"LOGIN_ATTEMPT",
      payload:{
        email:this.state.email,
        password:this.state.password
      }
    })

    // If we succeed on logging in, reach AlbumsAndPosts
    if(this.props.nav.logged === true){
      this.props.history.push('/AlbumsAndPosts')
    }
  }

  render() {
    return (
      <div id="Login">
        <div>Email</div>
        <input
          id="emailInput"
          value = {this.state.email}
          onChange = {(e)=>this.setState({email:e.target.value})}
        />
         
        <div>Password</div>
        <input
          id="passwordInput"
          type="password"
          value = {this.state.password}
          onChange = {(e)=>this.setState({password:e.target.value})}
        />
        <div>
          <button
            id="loginBtn"
            onClick={this.loginIn}
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
})

let RouterShell = withRouter(Content);  
let ReduxShell = connect(mapStateToProps)(RouterShell)
export default ReduxShell;
