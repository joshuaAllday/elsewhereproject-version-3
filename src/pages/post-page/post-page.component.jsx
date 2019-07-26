import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import PageCard from '../../components/page-card/page-card.component';

import './post-page.styles.css';

class PostPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            articletitle:''
        }
    }

    handleSubmit = event => {
        const { name } = this.state;
        event.preventDefault();
        console.log(this.state.firstname);
        this.setState({[name]: ''})
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }



    render(){
        const { firstname, lastname, email, articletitle } = this.state;
        return(
            <div className='post-page-container'>
                <PageCard>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='firstname'
                            type='text'
                            onChange={this.handleChange}
                            value={firstname}
                            label='First name'
                            required
                        />
                        <FormInput
                            name='lastname'
                            type='text'
                            onChange={this.handleChange}
                            value={lastname}
                            label='Last name'
                            required
                        />
                        <FormInput
                            name='email'
                            type='email'
                            onChange={this.handleChange}
                            value={email}
                            label='Email'
                            required
                        />
                        <FormInput
                            name='articletitle'
                            type='text'
                            onChange={this.handleChange}
                            value={articletitle}
                            label='Article Title'
                            required
                        />
                        <CustomButton type='submit'>
                            Post
                        </CustomButton>
                    </form>
                </PageCard>
            </div>
        );
    };
};

export default PostPage;
