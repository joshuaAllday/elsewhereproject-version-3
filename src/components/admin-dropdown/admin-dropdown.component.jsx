import React from 'react';
import { connect } from 'react-redux';

import { signOutStartAsync } from '../../redux/users/users.actions';
import { toggleAdminDropdown } from '../../redux/dropdown/dropdown.actions';

import {
    AdminDropdownContainer,
    AdminItemsContainer,
    AdminLink
} from './admin-dropdown.styles';

const AdminDropdown = ({signOutStartAsync, toggleAdminDropdown}) => (
    <AdminDropdownContainer>
        <AdminItemsContainer>
            <AdminLink to='/edit-articles' onClick={toggleAdminDropdown}>
                Edit Articles
            </AdminLink> 
            <AdminLink to='/register-user' onClick={toggleAdminDropdown}>
                Register Admins
            </AdminLink>
            <AdminLink as='div' onClick={signOutStartAsync} >
                Sign Out
            </AdminLink>
        </AdminItemsContainer>
    </AdminDropdownContainer>
);

const mapDispatchToProps = dispatch => ({
    signOutStartAsync: () => dispatch(signOutStartAsync()),
    toggleAdminDropdown: () => dispatch(toggleAdminDropdown())
});

export default connect(null, mapDispatchToProps)(AdminDropdown);

