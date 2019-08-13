import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectModalHidden } from '../../redux/modal/modal.selectors';
import { toggleModal } from '../../redux/modal/modal.actions';

import Modal from '../modal/modal.component';
import ModalEditArticle from '../modal-edit-article/modal-edit-article.component';
import ArticleCard from '../article-card/article-card.component';

class ArticleListEdit extends React.Component {
    constructor(){
        super();
        this.state = {
            passArticle:'',
            num:''
        }
    }

    modalClick = (filteredArticle, i) => {
        this.setState({passArticle: filteredArticle, num: i})
        this.props.toggleModal();
    }

    render(){
        const { filteredArticles, hidden } = this.props;
        const { passArticle, num } = this.state;
        return(
            <div>
                {
                    filteredArticles.map((filteredArticle, i) => {
                        return <div key={i} onClick={(e) => {this.modalClick(filteredArticle, i)}}>
                                <ArticleCard 
                                    key={i} 
                                    otherCollectionProps={filteredArticle}
                                />
                            </div>
                    })
                }
                {
                    hidden 
                    ? null
                    : <Modal>
                        <ModalEditArticle article={passArticle} num={num} />
                    </Modal>
                }
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    hidden: selectModalHidden
});
 
const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});
  

export default connect(mapStateToProps,mapDispatchToProps)(ArticleListEdit);
