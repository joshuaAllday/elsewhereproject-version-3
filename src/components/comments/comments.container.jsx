import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCommentsFetching } from '../../redux/articles/articles.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CommentsSection from './comments.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCommentsFetching
});

const CommentsSectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CommentsSection);  

export default CommentsSectionContainer;