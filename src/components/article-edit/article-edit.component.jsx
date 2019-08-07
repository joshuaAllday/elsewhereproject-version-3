import React, {useState} from 'react';

import {ArticleContainer} from './article-edit.styles';

import Modal from '../modal/modal.component';
import ModalEditArticle from '../modal-edit-article/modal-edit-article.component';

const ArticleEdit = ({article}) => {
    const [toggle, setToggle] = useState(false)
    return(
        <>
            {toggle && 
                <Modal>
                    <ModalEditArticle article={article} />
                </Modal>
            }
            <ArticleContainer onClick={() => setToggle(!toggle) }>
                <h5>
                    {article.articletitle}
                </h5>
            </ArticleContainer>
        </>
    );
};

export default ArticleEdit;
