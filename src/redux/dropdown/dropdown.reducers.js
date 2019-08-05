import DropdownActionTypes from './dropdown.types';

const INITIAL_STATE ={
    hidden: true
};

const dropdownReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DropdownActionTypes.TOGGLE_ADMIN_DROPDOWN : 
            return {
                ...state,
                hidden: !state.hidden
            };
        default :
            return state;
    };
};

export default dropdownReducer;