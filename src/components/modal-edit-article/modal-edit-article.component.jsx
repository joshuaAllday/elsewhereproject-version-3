import React from 'react';

import ModalOverlay from '../modal-overlay/modal-overlay.component';
import CustomButton from '../custom-button/custom-button.component';
import FormInputEdit from '../form-input-edit/form-input-edit.component';
import FormInputEditTextbox from '../form-input-edit-textbox/form-input-edit-textbox.component';

import './modal-edit-article.styles.css';

class ModalEditArticle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articletitle: this.props.article.articletitle
        }
    }

    render(){
        const { article } = this.props;
        return(
            <div>
                <ModalOverlay />
                <div className='article-edit-container'>
                    <div className='input-container'>
                        <FormInputEdit
                            name='article-title'
                            type='text'
                            label='Article Title'
                            defaultValue={article.articletitle}
                        />
                        <FormInputEdit
                            name='Firstname'
                            type='text'
                            label='Firstname'
                            defaultValue={article.firstname}
                        />
                        <FormInputEdit
                            name='lastname'
                            type='text'
                            label='Lastname'
                            defaultValue={article.lastname}
                        />
                        <FormInputEdit
                            name='latitude'
                            type='text'
                            label='Latitude'
                            defaultValue={article.latitude}
                        />
                        <FormInputEdit
                            name='longitude'
                            type='text'
                            label='Longitude'
                            defaultValue={article.longitude}
                        />
                        <FormInputEditTextbox
                            name='article'
                            type='text'
                            label='Article'
                            rows="10"
                            defaultValue={article.article}
                        />
                        <div className='save-button'>
                            <CustomButton>
                                Save
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ModalEditArticle;
