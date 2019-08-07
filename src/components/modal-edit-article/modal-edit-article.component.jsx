import React from 'react';

import './modal-edit-article.styles.css';

const ModalEditArticle = ({article}) => (
    <div className='modal-edit-container'>
        {article.articletitle}
    </div>
);

export default ModalEditArticle;
