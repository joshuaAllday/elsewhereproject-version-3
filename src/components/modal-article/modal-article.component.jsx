import React, { useState} from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/modal/modal.actions';
import { reportArticleStartAsync, fetchCommentsAsyncStart } from '../../redux/articles/articles.actions';

import CommentsSectionContainer from '../comments/comments.container';

import './modal-article.styles.css';

const ModalArticle = ({article, toggleModal, reportArticleStartAsync, fetchCommentsAsyncStart}) => {
    const [hiddenComments, setHiddenComments] = useState(true);
    return(
        <div className='modal-article-container'>
            <div className='modal-article-layout'>
                <div className='modal-close' onClick={toggleModal}>
                    &times;
                </div>
                <header className='article-header'>
                    <h3> {article.articletitle} </h3>
                    <h5> -{article.tag} </h5>
                    <h5>{article.firstname}  {article.lastname}</h5>
                </header>
                <div className='article-scroll'>
                    <main className='article-main-body'>
                        {article.article}
                    </main>
                    <div className='report-article' onClick={() => reportArticleStartAsync(article.articletitle, article.firstname, article.lastname, article.id) }>
                        Report
                    </div>
                    {
                        hiddenComments
                        ? ( <div 
                                className='article-comments' 
                                onClick={() => {
                                    setHiddenComments(false);
                                    fetchCommentsAsyncStart(article.id);
                                }}
                            >
                                Comments
                            </div>
                        ) : (
                            <div className='comment-section-container'>
                                <CommentsSectionContainer />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    reportArticleStartAsync: (articletitle, firstname, lastname, id) => 
    dispatch(reportArticleStartAsync({articletitle, firstname, lastname, id})),
    fetchCommentsAsyncStart: (articlenumber) => dispatch(fetchCommentsAsyncStart({articlenumber}))
});

export default connect(null, mapDispatchToProps)(ModalArticle);
