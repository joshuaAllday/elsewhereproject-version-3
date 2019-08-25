import { createSelector } from 'reselect';

const selectDropdown = state =>  state.dropdown;

export const selectDropdownHidden = createSelector(
	[selectDropdown],
	dropdown => dropdown.hidden
);

export const selectMapDropdownHidden = createSelector(
	[selectDropdown],
	dropdown => dropdown.hiddenMap
);

export const selectNavHidden = createSelector(
	[selectDropdown],
	dropdown => dropdown.hiddenNav
);