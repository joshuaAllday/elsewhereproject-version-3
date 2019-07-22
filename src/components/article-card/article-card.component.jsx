import React from 'react';

import './article-card.styles.css';

const ArticleCard = ({articletitle, tag, firstname, lastname}) => (
    <div className='card-container'>
        <h5 className='article-title'>
            {articletitle}
        </h5>
        <p>
        - {tag}
        </p>
        <p className='article-author'>
            {firstname} {lastname}
        </p>
    </div>
);

export default ArticleCard;