import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectComments, selectCommentsError } from '../../redux/articles/articles.selectors';

const CommentsSection = ({comments, error}) => (
    <div>
        <h5>
            Comments
        </h5>

        {
            error !== undefined
            ? <div> {error} </div>
            : ( <>
                {comments.map((comment,i) => {
                    return(
                        <div key={i}>
                            <h5>
                                {comment.name}
                            </h5>
                            <p>
                                {comment.comment}
                            </p>
                        </div>
                    )
                })}
            </>
            )
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    comments: selectComments,
    error: selectCommentsError 
});

export default connect(mapStateToProps)(CommentsSection);