import React from 'react';
import { connect } from 'react-redux';

import { signOutAsync } from '../../redux/users/users.actions';

import {
    AdminDropdownContainer,
    AdminItemsContainer,
    AdminLink
} from './admin-dropdown.styles';

const AdminDropdown = ({signOutAsync}) => (
    <AdminDropdownContainer>
        <AdminItemsContainer>
            <AdminLink to='/edit-articles'>
                Edit Articles
            </AdminLink>
            <AdminLink as='div' onClick={signOutAsync} >
                Sign Out
            </AdminLink>
        </AdminItemsContainer>
    </AdminDropdownContainer>
);

const mapDispatchToProps = dispatch => ({
    signOutAsync: () => dispatch(signOutAsync())
});

export default connect(null, mapDispatchToProps)(AdminDropdown);

