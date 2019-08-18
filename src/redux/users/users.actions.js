import UserActionTypes from './users.types';
import {toggleSignOut} from '../dropdown/dropdown.actions';

// sign-in reducer functions
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
                alert('sign-in failure')
                dispatch(signInFailure(data))
            }
        })
        .catch(error => {
            alert('sign-in failure');
            dispatch(signInFailure(error.message))
        })
    }
};

// sign-out reducer functions

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

export const signOutStartAsync = () => {
    return dispatch => {
        dispatch(signOutStart());
        let token = JSON.parse(window.localStorage.getItem('persist:root'));
        token.user = JSON.parse(token.user);
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
                dispatch(toggleSignOut());
            } else {
                alert('sign-out failure')
                dispatch(signOutFailure(data));
            }
        })
        .catch(error => {
            alert('sign-out failure')
            dispatch(signOutFailure(error.message))
        })
    };
}; 

// Register reducer functions

export const registerStart = () => ({
    type: UserActionTypes.REGISTER_START
});

export const registerSuccess = data => ({
    type: UserActionTypes.REGISTER_SUCCESS,
    payload: data
});

export const registerFailure = error => ({
    type: UserActionTypes.REGISTER_FAILURE,
    payload: error
});

export const registerStartAsync = ({username, password}) => {
    return dispatch => {
        dispatch(registerStart());
        let token = JSON.parse(window.localStorage.getItem('persist:root'));
        token.user = JSON.parse(token.user);
        let tokens = token.user.currentUser;
        return fetch('/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': tokens
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === 'true'){
                alert('successfully registered')
                dispatch(registerSuccess(data))
            } else {
                alert('unsuccessfully registered')
                dispatch(registerFailure(data))
            }
        })
        .catch(error => {
            alert('unsuccessfully registered')
            dispatch(registerFailure(error.message))
        })
    }

};
