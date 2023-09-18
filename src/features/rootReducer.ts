import {combineReducers} from 'redux'
import signUpSlace from './signUpSlace'
import usersSlice from './usersSlice'

const rootReducer = combineReducers({
    signUpSlace: signUpSlace,
    usersSlice: usersSlice
})

export default rootReducer;