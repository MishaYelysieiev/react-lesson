import {initialState, userReducer} from "./user";

import { PASSWORD_REQUEST, SET_NAME, SET_PASSWORD } from "../Actions/SubheaderActions";


describe('user reducer',()=>{

    it('SET_PASSWORD',()=>{

        const action = {
            type: SET_PASSWORD,
            payload: 'qwerty'
        };

        expect(
            userReducer(initialState,action)
        )
            .toEqual({
                ...initialState,
                client:{...initialState.client, password: 'qwerty'}

            })

    })
});
