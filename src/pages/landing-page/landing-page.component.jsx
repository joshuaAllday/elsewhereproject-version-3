import React from 'react';

import WelcomeLogo from '../../components/welcome-logo/welcome-logo.component';
import ArticleCardListContainer from '../../components/article-cardlist/article-cardlist.container';
import ScrollableContainer from '../../components/scrollable-container/scrollable-container.component';

import './landing-page.styles.css';

const LandingPage = () => (
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
);

export default LandingPage; 