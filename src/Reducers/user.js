const initialState = {
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

export function userReducer(state = initialState) {
    return state
}
