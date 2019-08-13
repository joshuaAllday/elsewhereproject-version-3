import React from 'react';

import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import ArticleCardListContainer from '../../components/article-cardlist/article-cardlist.container';
import ScrollableContainer from '../../components/scrollable-container/scrollable-container.component';
import Header from '../../components/header/header.component';

import './landing-page.styles.css';

const LandingPage = () => (
    <div>
        <Header />
        <div className='landing-page-container'>
            <div className='welcome-section'>
                <WelcomeLogo /> 
            </div>
            <div className='card-section' >
                <h3>
                    Latest Articles
                </h3>
                <ScrollableContainer>
                    <ArticleCardListContainer />
                </ScrollableContainer>
            </div> 
        </div>
    </div>
);

export default LandingPage; 