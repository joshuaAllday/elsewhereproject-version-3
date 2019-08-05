import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/users/users.selectors';
import { signOutAsync } from '../../redux/users/users.actions';

import { HeaderContainer,
    OptionsContainer, 
    OptionLink 
   } from './header.styles';

const Header = ({currentUser, signOutAsync}) => (
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
                    <OptionLink  as='div' onClick={signOutAsync}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    null
                )
            }
        </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
  
const mapDispatchToProps = dispatch => ({
    signOutAsync: () => dispatch(signOutAsync())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);