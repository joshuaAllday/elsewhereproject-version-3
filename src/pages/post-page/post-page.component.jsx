import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FormInputTextbox from '../../components/form-input-textbox/form-input-textbox.component';
import FormInputSelector from '../../components/form-input-option/form-input-option.component';

import PageCard from '../../components/page-card/page-card.component';

import './post-page.styles.css';

class PostPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            articletitle:'',
            latitude:'',
            longitude:'',
            tag:'',
            article:''
        }
    }

    handleSubmit = event => {
        const { 
            firstname, lastname
        } = this.state;
        event.preventDefault();
        console.log(firstname, lastname)
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            articletitle: '',
            latitude: '',
            longitude: '',
            article: ''
        });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }



    render(){
        const { firstname, lastname, email, articletitle, latitude, longitude, article, tag } = this.state;
        return(
            <div className='post-page-container'>
                <PageCard>
                    <p className='post-text-containers'>
                        Uploading to the map? Hell yeah! When you submit the form below,
                        your article will be send to the editing team behind the project for
                        grammatical checking and potentially some feedback for you on tweaks
                        we'd like to see. The best content for the Elsewhere project is locally 
                        focussed, but globally relevant. Extra points will be given for first-hand 
                        experiences that challenge perceptions of a place, person, time - anything really. 
                    </p>
                    <p className='post-text-containers'>
                        Last but not least - it's super important to give us either a latitude and longitude,
                        or a location for where your article appears. Otherwise, we won't know where to put it 
                        on the map. You can choose anywhere in the world. 
                    </p>
                    <p className='post-text-containers'>
                        There is a min character length of uploading an article: 1000 characters.
                    </p>
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
                        <FormInput
                            name='latitude'
                            type='number'
                            onChange={this.handleChange}
                            value={latitude}
                            label='Latitude'
                            required
                        />  
                        <FormInput
                            name='longitude'
                            type='number'
                            onChange={this.handleChange}
                            value={longitude}
                            label='Longitude'
                            required
                        />
                        <FormInputSelector
                            name='tag'
                            onChange={this.handleChange}
                            value={tag}
                            label='Tag'
                            required
                        />
                        <FormInputTextbox
                            name='article'
                            type='textarea'
                            onChange={this.handleChange}
                            value={article}
                            label='Article'
                            rows="4"
                            required
                        />
                        <CustomButton type='submit'> Post </CustomButton>
                    </form>
                </PageCard>
            </div>
        );
    };
};

export default PostPage;
