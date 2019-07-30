import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';

import './welcome-logo.styles.css';

import Logo from '../../assets/logo.png';

const WelcomeLogo = ({history}) => {
    return(
        <div className='welcome-container'>
            <div className='logo-container'>
                <img src={Logo} alt='Logo' className='logo' />
            </div>
            <div className='message-container'>
                <p className='message'>
                    This is a Social Journalism Website
                </p>
                <div>
                    <CustomButton onClick={()=> history.push('/map')}>
                        Learn More
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default withRouter(WelcomeLogo);

