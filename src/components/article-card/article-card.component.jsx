import React from 'react';
import { withRouter } from 'react-router-dom';

import './article-card.styles.css';

const ArticleCard = ({articletitle, tag, firstname, lastname, history}) => (
    <div className='card-container' onClick = {() => history.push('/about')} >
            <div className='data-container'>
                <h5 className='article-title'>
                    {articletitle}
                </h5>
                <p className='tag'>
                - {tag}
                </p>
                <p className='article-author'>
                    {firstname} {lastname}
                </p>
            </div>
    </div>
);

export default withRouter(ArticleCard);