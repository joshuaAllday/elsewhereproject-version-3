import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/articles/articles.selectors';
import ArticleCard from '../article-card/article-card.component';

const ArticleCardList = ({collections}) => {
    return (
        <div>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <ArticleCard key={id}{...otherCollectionProps} />
                ))
            }
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollections, 
});

export default connect(mapStateToProps)(ArticleCardList);