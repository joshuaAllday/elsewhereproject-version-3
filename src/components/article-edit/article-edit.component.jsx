import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectModalHidden } from '../../redux/modal/modal.selectors';
import { toggleModal } from '../../redux/modal/modal.actions';

import {ArticleContainer} from './article-edit.styles';

import Modal from '../modal/modal.component';
import ModalEditArticle from '../modal-edit-article/modal-edit-article.component';

const ArticleEdit = ({article, hidden, toggleModal}) => {
    return(
        <div>
            {
                hidden ? null
                : (<Modal>
                    <ModalEditArticle article={article} />
                 </Modal>)
            }
            <ArticleContainer onClick={toggleModal}>
                <h5>
                    {article.articletitle}
                </h5>
            </ArticleContainer>
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    hidden: selectModalHidden
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});
  

export default connect(mapStateToProps,mapDispatchToProps)(ArticleEdit);
