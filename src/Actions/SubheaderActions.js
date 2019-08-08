export const SET_NAME = 'SET_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const PASSWORD_REQUEST = 'PASSWORD_REQUEST';


export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setPassword(password) {
    return {
        type: "SET_PASSWORD",
        payload: password
    }
}

export function requestPassword() {

    return dispatch => {
        dispatch({
            type: PASSWORD_REQUEST,
            payload: 'wait for a password...'
        });

        setTimeout(() => {

            fetch(`https://swapi.co/api/people/${parseInt(Math.random()*80)}/`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    dispatch({
                        type: SET_PASSWORD,
                        payload: data.name
                    })
                })
        }, 1000)
    }
}

