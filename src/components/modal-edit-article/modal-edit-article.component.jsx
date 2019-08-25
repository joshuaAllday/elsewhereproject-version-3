import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/modal/modal.actions';
import { editArticleStartAsync, deleteArticleStartAsync } from '../../redux/articles/articles.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInputEdit from '../form-input-edit/form-input-edit.component';
import FormInputEditTextbox from '../form-input-edit-textbox/form-input-edit-textbox.component';

import './modal-edit-article.styles.css';

class ModalEditArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.article.id,
            firstname: this.props.article.firstname, 
            lastname: this.props.article.lastname, 
            articletitle: this.props.article.articletitle, 
            latitude: this.props.article.latitude, 
            longitude: this.props.article.longitude,  
            article: this.props.article.article
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const { editArticleStartAsync } = this.props;
        const { id, firstname, lastname, articletitle, latitude, longitude, article } = this.state;
        editArticleStartAsync(id, firstname, lastname, articletitle, latitude, longitude, article);
        this.props.toggleModal();
    };

    handleDelete = event => {
        event.preventDefault();
        const { article, num } = this.props;
        this.props.deleteArticleStartAsync(article.id, num)
        this.props.toggleModal();
    };

    render(){
        const { article, toggleModal } = this.props;
        return(
            <div className='modal-container'>
                <div className='article-edit-container'>
                    <div className='modal-close' onClick={toggleModal}>
                        &times;
                    </div>
                    <h5 className='edit-article-title'> Edit Article </h5>
                    <div className='input-container'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInputEdit
                                name='articletitle'
                                type='text'
                                label='Article Title'
                                onChange={this.handleChange}
                                defaultValue={article.articletitle}
                            />
                            <FormInputEdit
                                name='firstname'
                                type='text'
                                label='Firstname'
                                onChange={this.handleChange}
                                defaultValue={article.firstname}
                            />
                            <FormInputEdit
                                name='lastname'
                                type='text'
                                label='Lastname'
                                onChange={this.handleChange}
                                defaultValue={article.lastname}
                            />
                            <FormInputEdit
                                name='latitude'
                                type='text'
                                label='Latitude'
                                onChange={this.handleChange}
                                defaultValue={article.latitude}
                            />
                            <FormInputEdit
                                name='longitude'
                                type='text'
                                label='Longitude'
                                onChange={this.handleChange}
                                defaultValue={article.longitude}
                            />
                            <FormInputEditTextbox
                                name='article'
                                type='text'
                                label='Article'
                                rows="10"
                                onChange={this.handleChange}
                                defaultValue={article.article}
                            />
                            <div className='save-button'>
                                <CustomButton className='edit-article-buttons' type='submit' isArticleSaving>
                                    Save
                                </CustomButton>
                                <CustomButton className='edit-article-buttons' onClick={toggleModal}>
                                    Exit
                                </CustomButton>
                                <CustomButton className='edit-article-buttons' onClick={this.handleDelete} isArticleDeleting>
                                    Delete
                                </CustomButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    editArticleStartAsync: (id, firstname, lastname, articletitle, latitude, longitude, article) => 
    dispatch(editArticleStartAsync({id, firstname, lastname, articletitle, latitude, longitude, article})),
    deleteArticleStartAsync: (id, num) => dispatch(deleteArticleStartAsync({id, num}))
});

export default connect(null, mapDispatchToProps)(ModalEditArticle);
