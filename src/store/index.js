import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import userStore from './reducer/user/index'

const reducer=combineReducers({
    userStore
})

const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store;