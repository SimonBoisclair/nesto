export default (
    state = {
        logged : false,

    }, action) => {
    switch (action.type) {
        case "LOGIN_ATTEMPT" :{
            let newState = {...state}
            if(action.payload.password === "111" && action.payload.email === "info@info.com"){
                newState.logged = true
            }else{
                newState.logged = false
            }
            return newState
        }
        default :
            return state
    }
}