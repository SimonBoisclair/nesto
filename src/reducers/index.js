import { combineReducers } from 'redux'

import nav from './navReducer.js'
import posts from './postsReducer.js'
import albums from './albumsReducer.js'

var reducers = combineReducers({
    nav : nav,
    posts : posts,
    albums : albums,
})

export default reducers