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
            <OptionLink to='/about'>
                About
            </OptionLink>
            <OptionLink to='/map'>
                Articles
            </OptionLink>
            <OptionLink to='/post'>
                Post
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;