import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleMapDropdown } from '../../redux/dropdown/dropdown.actions';
import { selectCurrentUser } from '../../redux/users/users.selectors';
import { signOutStartAsync } from '../../redux/users/users.actions';

import {
    MapDropdownContainer,
    MapItemsContainer,
    MapLink
} from './map-dropdown.styles';

const MapDropdown = ({currentUser,signOutStartAsync,toggleMapDropdown}) => (
    <MapDropdownContainer>
        <MapItemsContainer>
           <MapLink to='/' onClick={toggleMapDropdown}>
                Home
           </MapLink>
           <MapLink to='/about' onClick={toggleMapDropdown}>
                About
           </MapLink>
           <MapLink to='/post' onClick={toggleMapDropdown}>
                Post
           </MapLink>
           {
              currentUser
              ? (
                <>
                    <MapLink to='/register-user' onClick={toggleMapDropdown}>
                        Register User
                    </MapLink>
                    <MapLink to='/edit-articles' onClick={toggleMapDropdown}>
                        Edit Articles
                    </MapLink>
                    <MapLink as='div' onClick={signOutStartAsync}>
                        Sign Out
                    </MapLink>
                </>
              )
              : null
           }
        </MapItemsContainer>
    </MapDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStartAsync: () => dispatch(signOutStartAsync()),
    toggleMapDropdown: () => dispatch(toggleMapDropdown())

});

export default connect(mapStateToProps, mapDispatchToProps)(MapDropdown);
