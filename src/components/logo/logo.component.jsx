import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/maplogo.png';


const LogoContainer = () => (
    <Link as='div' to='/'>
        <img src={Logo} className='small-logo-container' alt='logo' /> 
    </Link>
);

export default LogoContainer;