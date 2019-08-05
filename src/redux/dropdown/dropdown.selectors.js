import { createSelector } from 'reselect';

const selectDropdown = state =>  state.dropdown;

export const selectDropdownHidden = createSelector(
	[selectDropdown],
	dropdown => dropdown.hidden
);