import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectComments, selectCommentsError } from '../../redux/articles/articles.selectors';

import CommentsPost from '../comments-post/comments-post.component';

import './comments.styles.css';

const CommentsSection = ({comments, error, articlenumber}) => (
    <div>
        <h5>
            Comments
        </h5>
        {
            error !== undefined
            ? (
                error === 'commenterror' 
                ? <div>
                    <CommentsPost id={articlenumber}/>
                    <h5> No Comments </h5>
                  </div>
                : <div> {error} </div>
            ): ( <>
                <CommentsPost id={articlenumber} />
                {comments.map((comment,i) => {
                    return(
                        <div key={i} className='comment-container'>
                            <p>
                                <b>{comment.name}</b>: {comment.comment}
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