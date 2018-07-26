import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected : -1,
      showPosts : false
    }
  }

  changePosition = (id) => {
    if(this.state.selected !== -1){
      this.props.dispatch({
        type:"CHANGE_POSITION",
        payload:{
          position : this.state.selected , 
          newPosition : id
        }
      })
      this.setState({selected : -1})
    }
  }

  defineOpacity = () => {
    if(this.state.selected!==-1){
      return {backgroundColor:"rgba(43,51,62,.5)"}
    }else{
      return {}
    }
  }

  render() {
    return (
      <div className="posts">
        {this.state.showPosts === false ?
          <button className="displayButton" onClick={()=>this.setState({showPosts:true})}>
            Show POSTS
          </button>
        :
          <button className="displayButton" onClick={()=>this.setState({showPosts:false})}>
            Hide POSTS
          </button>
        }
        {this.state.showPosts === true ? 
          <div>
            {/*MAPPING THE POSTS*/}
            {this.props.posts.map((el,id)=>{
              if(id<25){
                let opacity = this.defineOpacity()
                return (
                  <div className="post" style={{...opacity}} key={id}>
                    <div className="btnContainer">
                        {
                          this.state.selected !== -1
                          ?<button className="numberBtn" onClick={(e)=>{
                            e.target.blur()
                            this.changePosition(id)
                          }}>{id +1}</button>
                          :<button className="number" onClick={()=>this.changePosition(id)}>{id +1}</button>
                        }
                    </div>
                    <div className="text">
                      <div className="title">
                        {el.title}
                      </div>
                      <br/>
                      <div className="postBody">
                        {el.body}
                      </div>
                      <div className="changeRanking">
                        {this.state.selected===-1?
                          (
                          <button 
                            className="changeRankingBtn" 
                            onClick={()=>{this.setState({selected:id})}}>
                            Change Ranking
                          </button>):null
                        }
                      </div>
                    </div>
                  </div>
                )
              }else{return null}
            })}
            {this.state.selected!==-1
              ?(<div className="instructionBar">
                  Select a number on the left
                </div>)
              :null
            }
          </div>
        :null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    posts : state.posts,
})

let ReduxShell = connect(mapStateToProps)(Content)
let RouterShell = withRouter(ReduxShell);  
export default RouterShell;
