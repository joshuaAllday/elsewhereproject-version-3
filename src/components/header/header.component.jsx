import React from 'react';

import { withRouter } from 'react-router-dom';

import { HeaderContainer,
    OptionsContainer, 
    OptionLink 
   } from './header.styles';

const Header = ({onHeader, history}) => (
    <HeaderContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                Home
            </OptionLink>
            <OptionLink to='/about'>
                About
            </OptionLink>
            <OptionLink 
                onClick={
                    () => {
                        onHeader(true)
                        history.push('/map')
                    }
                }
            >
                Articles
            </OptionLink>
            <OptionLink to='/post'>
                Post
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default withRouter(Header);