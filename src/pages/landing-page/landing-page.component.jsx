import React from 'react';

import Header from '../../components/header/header.component';
import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import ArticleCardList from '../../components/article-cardlist/article-cardlist.component';

import './landing-page.styles.css';

const LandingPage = () => (
    <div>
        <Header />
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
            <ArticleCardList />
        </div> 
    </div>
);

export default LandingPage; 