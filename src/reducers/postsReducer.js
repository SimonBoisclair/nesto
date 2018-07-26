export default (
    state = []
    , action) => {
    switch (action.type) {
        case "LOAD_ALBUMS_AND_POSTS" :{
            return action.payload.posts
        }
        case "CHANGE_POSITION" :{
            let newState = [...state]

            // Keeping in memory the el
            let el = newState[action.payload.position]

            // Taking out an element
            newState.splice(action.payload.position,1)

            // Adding the element in memory to the list at the right position
            newState.splice(action.payload.newPosition,0,el)

            return newState
        }
        default : {
            return state
        }
    }
}
