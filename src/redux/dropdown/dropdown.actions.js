import DropdownActionTypes from './dropdown.types';

export const toggleAdminDropdown = () => ({
    type: DropdownActionTypes.TOGGLE_ADMIN_DROPDOWN
});

export const toggleMapDropdown = () => ({
    type: DropdownActionTypes.TOGGLE_MAP_DROPDOWN
});

export const toggleSignOut = () => ({
    type: DropdownActionTypes.TOGGLE_SIGN_OUT
});

export const toggleNavigation = () => ({
    type: DropdownActionTypes.TOGGLE_NAVIGATION
});