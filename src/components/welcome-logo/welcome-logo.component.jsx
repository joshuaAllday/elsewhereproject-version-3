import React from 'react';

import './welcome-logo.styles.css';

import Logo from '../../assets/logo.png';

const WelcomeLogo = () => {
    return(
        <div className='welcome-container'>
            <div className='logo-container'>
                <img src={Logo} alt='Logo' className='logo' />
            </div>
            <div className='message-container'>
                <p className='message'>
                    This is a Social Journalism Website
                </p>
                <button className='learn-more'>
                    Learn More 
                </button>
            </div>
        </div>
    );
};

export default WelcomeLogo;