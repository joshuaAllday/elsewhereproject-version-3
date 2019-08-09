import ModalActionTypes from './modal.types';

const INITIAL_STATE ={
    hidden: true
};

const modalReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ModalActionTypes.TOGGLE_MODAL : 
            return {
                ...state,
                hidden: !state.hidden
            };
        default :
            return state;
    };
};

export default modalReducer;