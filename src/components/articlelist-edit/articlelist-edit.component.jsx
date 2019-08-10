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
            article:''
        }
    }

    modalClick = ({article}) => {
        this.setState({article: article})
        this.props.toggleModal();
    }

    render(){
        const { filteredArticles, hidden } = this.props;
        const { article } = this.state;
        return(
            <div>
                {
                    filteredArticles.map((article, i) => {
                        return(
                            <div key={i} onClick={() => {this.modalClick(article)}}>
                                <ArticleCard 
                                    key={i} 
                                    otherCollectionProps={article}
                                />
                            </div>
                        );
                    })
                }
                {
                    hidden 
                    ? null
                    : <Modal>
                        <ModalEditArticle article={article} />
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
