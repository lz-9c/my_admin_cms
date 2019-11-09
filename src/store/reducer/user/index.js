import {handleActions} from 'redux-actions';

const initState={
    userId:'1',
    userPw:'123',
    num:1
}

export default handleActions({
    addNumAction:(state,action)=>{
        let newState=JSON.parse(JSON.stringify(state));
        return newState;
    }
},initState)