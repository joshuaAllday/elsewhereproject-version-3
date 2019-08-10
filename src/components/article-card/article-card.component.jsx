import React from 'react';

import './article-card.styles.css';

const ArticleCard = ({otherCollectionProps}) => (
    <div className='card-container'>
        <div className='data-container'>
            <h5 className='article-title'>
                {otherCollectionProps.articletitle}
            </h5>
            <p className='tag'>
                - {otherCollectionProps.tag}
            </p>
            <p className='article-author'>
                {otherCollectionProps.firstname} {otherCollectionProps.lastname}
            </p>
        </div>
    </div>
);

export default ArticleCard;