import UserActionTypes from './users.types';

export const signInStart = () => ({
    type:UserActionTypes.SIGN_IN_START
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
}); 

export const signInStartAsync = ({username, password}) => {
    return dispatch => {
        return fetch('http://localhost:3000/signin', {
            method: 'POST',
			headers: {
			 	'Content-Type': 'application/json',
			 	"cache-control": "no-cache"
			},
			mode: 'cors',
			body: JSON.stringify({
			 	username: username,
				password: password,
			})
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId && data.success === 'true'){
                console.log(data)
                window.sessionStorage.setItem('token', data.token);
                dispatch(signInSuccess(data));
            } else {
                dispatch(signInFailure(data))
            }
        })
        .catch(error => dispatch(signInFailure(error.message)))
    }
};
