import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectModalHidden } from '../../redux/modal/modal.selectors';
import { toggleModal } from '../../redux/modal/modal.actions';

import Modal from '../modal/modal.component';
import ModalArticle from '../modal-article/modal-article.component';


import { selectCollections } from '../../redux/articles/articles.selectors';
import ArticleCard from '../article-card/article-card.component';

class ArticleCardList extends React.Component {
    constructor(){
        super();
        this.state = {
            article:''
        }
    }
    clickModal = (article) => {
        this.setState({article: article});
        this.props.toggleModal();
    }

    render(){
        const { collections, hidden } = this.props;
        const { article } = this.state;
        return(
            <div>
                {
                    collections.map((article, i) => {
                        return <div key={i} onClick={(e) => {this.clickModal(article)}}>
                            <ArticleCard  
                                key={i}
                                otherCollectionProps={article} 
                            />
                        </div>
                    })      
                }
                {hidden
                    ? null
                    :   <Modal>
                            <ModalArticle article={article} />
                        </Modal>
                }
            </div>
        );
    }
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
    hidden: selectModalHidden 
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ArticleCardList);