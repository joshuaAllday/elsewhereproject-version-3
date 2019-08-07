import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/articles/articles.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SearchableArticlelist from './searchable-articlelist.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const SearchableArticlelistContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SearchableArticlelist);  

export default SearchableArticlelistContainer;