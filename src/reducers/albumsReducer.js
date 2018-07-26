export default (
    state = []
    , action) => {
    switch (action.type) {
        case "LOAD_ALBUMS_AND_POSTS" :{
            return action.payload.albums
        }
        default : {
            return state
        }
    }
}
