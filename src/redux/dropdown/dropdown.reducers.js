import DropdownActionTypes from './dropdown.types';

const INITIAL_STATE ={
    hidden: true, 
    hiddenMap: false,
    hiddenNav: true
};

const dropdownReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DropdownActionTypes.TOGGLE_ADMIN_DROPDOWN : 
            return {
                ...state,
                hidden: !state.hidden
            };
        case DropdownActionTypes.TOGGLE_MAP_DROPDOWN :
            return {
                ...state,
                hiddenMap: !state.hiddenMap
            }
        case DropdownActionTypes.TOGGLE_SIGN_OUT :
            return {
                ...state,
                hidden: true
            }
        case DropdownActionTypes.TOGGLE_NAVIGATION :
            return {
                ...state,
                hiddenNav: !state.hiddenNav
            }
        default :
            return state;
    };
};

export default dropdownReducer;