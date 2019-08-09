import React from 'react';

import './modal-article.styles.css';

const ModalArticle = ({article}) => (
    <div className='modal-article-container'>
        <div className='modal-article-layout'>
            <header className='article-header'>
                <h3> {article.articletitle} </h3>
                <h5> -{article.tag} </h5>
                <h5>{article.firstname}  {article.lastname}</h5>
            </header>
            <main className='article-main-body'>
                {article.article}
            </main>
        </div>
    </div>
);

export default ModalArticle;
