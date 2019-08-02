import {PASSWORD_REQUEST, SET_NAME, SET_PASSWORD} from "../Actions/SubheaderActions";


export const initialState = {
    client: {
        name: 'Strange Name',
        password: 'qwerty1',
        type: 'animal',
        childs:{
            boy:'Johnny',
            girl:'Jonhenna'
        }
    }
};


export function userReducer(state = initialState, action ) {
    switch (action.type) {
        case SET_NAME :
            return {...state, client:{...state.client, name:action.payload}};
        case SET_PASSWORD:
            return{...state,client:{...state.client, password: action.payload}};
        case PASSWORD_REQUEST:
            return{...state,client:{...state.client, password: action.payload}};
        default:
            return state
    }

}


