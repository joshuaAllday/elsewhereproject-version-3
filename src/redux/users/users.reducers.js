import UserActionTypes from './users.types';

const INITIAL_STATE = {
    currentUser: null, 
    error: null,
    isSending: false,
    posted: null
};

const usersReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case UserActionTypes.SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS :
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.REGISTER_START :
            return {
                ...state,
                isSending: true
            };
        case UserActionTypes.REGISTER_SUCCESS :
            return {
                ...state,
                posted: action.payload,
                isSending:false
            };
        case UserActionTypes.SIGN_IN_FAILURE : 
        case UserActionTypes.SIGN_OUT_FAILURE :
        case UserActionTypes.REGISTER_FAILURE :
            return {
                ...state,
                error: action.payload
            };
        default : 
            return state;
    }
}

export default usersReducer;