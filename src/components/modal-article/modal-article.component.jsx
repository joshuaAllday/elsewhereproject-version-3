import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/modal/modal.actions';

import './modal-article.styles.css';

const ModalArticle = ({article, toggleModal}) => (
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
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
  });

export default connect(null, mapDispatchToProps)(ModalArticle);
