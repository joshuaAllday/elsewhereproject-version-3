import React from 'react';
import { withRouter } from 'react-router-dom';

import './article-card.styles.css';

const ArticleCard = ({id, name, history}) => (
    <div className='card-container' onClick = {() => history.push(`/article/${id - 1}`)} >
            <div className='data-container'>
                <h1>{name}</h1>
                {/*<h5 className='article-title'>
                    {articletitle}
                </h5>
                <p className='tag'>
                - {tag}
                </p>
                <p className='article-author'>
                    {firstname} {lastname}
                </p>*/}
            </div>
    </div>
);

export default withRouter(ArticleCard);