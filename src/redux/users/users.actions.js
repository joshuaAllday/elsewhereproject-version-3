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
        dispatch(signInStart());
        return fetch('/signin', {
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
                dispatch(signInSuccess(data.token));
            } else {
                dispatch(signInFailure(data))
            }
        })
        .catch(error => dispatch(signInFailure(error.message)))
    }
};

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signOutAsync = () => {
    return dispatch => {
        dispatch(signOutStart());
        let token = JSON.parse(window.localStorage.getItem('persist:root'));
        token.user = JSON.parse(token.user)
        console.log(JSON.stringify(token.user.currentUser));
        let tokens = token.user.currentUser;
        return fetch('/signout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokens
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === 'true'){
                dispatch(signOutSuccess());
            } else {
                dispatch(signOutFailure(data))
            }
        })
        .catch(error => dispatch(signOutFailure(error.message)))
    };
}; 
