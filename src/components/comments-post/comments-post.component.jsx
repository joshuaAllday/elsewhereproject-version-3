import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { postCommentAsyncStart } from '../../redux/articles/articles.actions';

import './comments-post.styles.css';

const Initial_State = {
    name:'',
    nameError: '',
    comment:'',
    commentError:''
}

class CommentsPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            nameError: '',
            comment:'',
            commentError:'',
            id: this.props.id       
        }
    }

    validate = () => {
        let nameError = "";
        let commentError = "";
        if (!this.state.name) {
            nameError = "error"
        }
        if(!this.state.comment){
            commentError = "error"
        }
        if (nameError || commentError){
            this.setState({ nameError, commentError})
            return false;
        }
        return true;
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const { postCommentAsyncStart } = this.props;
        const { name, comment, id } = this.state;
        const isValid = this.validate();
        if ( isValid ){
            postCommentAsyncStart(name, comment,id)
            this.setState(Initial_State);
        }
    }
    
    render(){
        const { name, comment, nameError, commentError } = this.state;
        return(
            <div>
                Post a Comment
                <form onSubmit={this.handleSubmit} className='comment-form-container'>
                    <FormInput 
                        name='name'
                        type='text'
                        onChange={this.handleChange}
                        value={name}
                        label='Name'
                        error={nameError}
                    />
                    <FormInput
                        name='comment'
                        type='text'
                        onChange={this.handleChange}
                        value={comment}
                        label='Comment'
                        error={commentError}
                    />
                    <div className='comment-button-container'>
                        <CustomButton type='submit' isArticleSaving>
                            Submit
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postCommentAsyncStart: (name, comment, id) => 
    dispatch(postCommentAsyncStart({name, comment, id}))
});

export default connect(null,mapDispatchToProps)(CommentsPost);