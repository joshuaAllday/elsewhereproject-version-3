import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/users/users.selectors';
import { selectDropdownHidden } from '../../redux/dropdown/dropdown.selectors';
import { toggleAdminDropdown } from '../../redux/dropdown/dropdown.actions';

import AdminDropdown from '../admin-dropdown/admin-dropdown.component';

import { HeaderContainer,
    OptionsContainer, 
    OptionLink
} from './header.styles';

const Header = ({currentUser, hidden, toggleAdminDropdown}) => (
    <HeaderContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                Home
            </OptionLink>
            <OptionLink to='/about'>
                About
            </OptionLink>
            <OptionLink to='/map'>
                Map
            </OptionLink>
            <OptionLink to='/post'>
                Post
            </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={toggleAdminDropdown}>
                        Admin
                    </OptionLink>     
                ) : (
                    null
                )
            }
            {hidden ? null : <AdminDropdown />}
        </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleAdminDropdown: () => dispatch(toggleAdminDropdown())
});
  
export default connect(mapStateToProps,mapDispatchToProps)(Header);