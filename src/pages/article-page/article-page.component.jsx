import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections, selectIsCollectionFetching } from '../../redux/articles/articles.selectors';
import PageCard from '../../components/page-card/page-card.component';

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
                    <PageCard>
                        <h1>{collections[id].name}</h1>
                        {/*<p>- {collections[id].tag}</p>
                        <p>{collections[id].firstname} {collections[id].lastname}</p>
                        <p className='main-article-container'>{collections[id].article}</p>*/}
                    </PageCard>
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
 