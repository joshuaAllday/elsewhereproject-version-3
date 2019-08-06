import React from 'react';
import { connect } from 'react-redux';

import { signOutAsync } from '../../redux/users/users.actions';
import { toggleAdminDropdown } from '../../redux/dropdown/dropdown.actions';

import {
    AdminDropdownContainer,
    AdminItemsContainer,
    AdminLink
} from './admin-dropdown.styles';

const AdminDropdown = ({signOutAsync, toggleAdminDropdown}) => (
    <AdminDropdownContainer>
        <AdminItemsContainer>
            <AdminLink to='/edit-articles' onClick={toggleAdminDropdown}>
                Edit Articles
            </AdminLink> 
            <AdminLink to='/register-user' onClick={toggleAdminDropdown}>
                Register Admins
            </AdminLink>
            <AdminLink as='div' onClick={signOutAsync} >
                Sign Out
            </AdminLink>
        </AdminItemsContainer>
    </AdminDropdownContainer>
);

const mapDispatchToProps = dispatch => ({
    signOutAsync: () => dispatch(signOutAsync()),
    toggleAdminDropdown: () => dispatch(toggleAdminDropdown())
});

export default connect(null, mapDispatchToProps)(AdminDropdown);

