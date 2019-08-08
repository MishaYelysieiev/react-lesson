import {initialState, userReducer} from "./user";

import { PASSWORD_REQUEST, SET_NAME, SET_PASSWORD } from "../Actions/SubheaderActions";


//////Function that gets particular name from the SWAPI///////

function getLukeName(){
   return fetch(`https://swapi.co/api/people/1/`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return{type:'PASSWORD_REQUEST',payload:data.name}
        })
}



describe('user reducer',()=>{

    it(SET_PASSWORD,()=>{

        const action = {
            type: SET_PASSWORD,
            payload: 'qwerty'
        };

        expect(userReducer(initialState,action))
            .toEqual({
                ...initialState,
                client:{...initialState.client, password: 'qwerty'}

            })

    });

    it(SET_NAME,async ()=>{

        const action = {
            type: SET_NAME,
            payload:'testing name'
        };

        await expect(userReducer(initialState,action))
            .toEqual({
                ...initialState,
                client:{...initialState.client, name: 'testing name'}

            })
    });

    it(PASSWORD_REQUEST,async ()=>{

        const action = await getLukeName();

        await expect(userReducer(initialState,action))
            .toEqual({
                ...initialState,
                client:{...initialState.client, password: 'Luke Skywalker'}

            })
    });

});
