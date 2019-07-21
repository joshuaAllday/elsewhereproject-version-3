import React from 'react';

import { HeaderContainer,
    OptionsContainer, 
    OptionLink 
   } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                Home
            </OptionLink>
            <OptionLink to='/'>
                About
            </OptionLink>
            <OptionLink to='/'>
                Articles
            </OptionLink>
            <OptionLink to='/'>
                Post
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;