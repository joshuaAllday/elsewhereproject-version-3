import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections, selectIsCollectionFetching } from '../../redux/articles/articles.selectors';

import './article-page.styles.css';

const ArticlePage = ({match, collections, isLoading}) => {
    const { id } = match.params;
    return(
        <div>
            {
                isLoading 
                ? <div>
                    loading
                  </div>
                : <div>
                    <h1>{collections[id].articletitle}</h1>
                    <p>- {collections[id].tag}</p>
                    <p>{collections[id].firstname} {collections[id].lastname}</p>
                  </div>
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
    isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(ArticlePage);
 