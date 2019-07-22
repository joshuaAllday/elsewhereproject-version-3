import React from 'react';

import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import ArticleCardListContainer from '../../components/article-cardlist/article-cardlist.container';

import './landing-page.styles.css';

const LandingPage = () => (
    <div className='landing-page-container'>
        <h1>
            Landing Page 
        </h1>
        <div className='welcome-section'>
            <WelcomeLogo /> 
        </div>
        <div className='card-section' >
            <h3>
                Article Card List 
            </h3>
            <ArticleCardListContainer />
        </div> 
    </div>
);

export default LandingPage; 