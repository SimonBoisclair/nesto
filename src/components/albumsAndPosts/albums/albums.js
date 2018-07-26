import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Content extends Component {
  constructor (props){
    super(props)
    this.state = {
      showAlbums : false
    }
  }

  render() {
    return (
      <div className="albums">
        {this.state.showAlbums === false ?
          <button className="displayButton" onClick={()=>this.setState({showAlbums:true})}>
            Show ALBUMS
          </button>
        :
          <button className="displayButton" onClick={()=>this.setState({showAlbums:false})}>
            Hide ALBUMS
          </button>
        }
        {/*MAPPING THE ALBUMS*/}
        {this.state.showAlbums === true?
          <div>
            {this.props.albums.map((el,id)=>{
              if(id<10){
                return (
                  <div key={el.id} className="album">
                    <div className="textContainer" >
                      <div className="text">
                        {el.title}
                      </div>
                    </div>
                  </div>
                )
              }else{return null}
            })}
          </div>
        :null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    albums : state.albums,
})

let ReduxShell = connect(mapStateToProps)(Content)
let RouterShell = withRouter(ReduxShell);  
export default RouterShell;
