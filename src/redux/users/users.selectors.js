import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectPosted = createSelector(
  [selectUser],
  user => user.posted
);

export const selectIsPostingRegister = createSelector(
  [selectUser],
  user => user.isSending
);