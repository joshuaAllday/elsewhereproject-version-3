import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/articles/articles.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import ArticleCardList from './article-cardlist.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const ArticleCardListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ArticleCardList);  

export default ArticleCardListContainer;