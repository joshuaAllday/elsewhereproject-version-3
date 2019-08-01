import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FormInputTextbox from '../../components/form-input-textbox/form-input-textbox.component';
import FormInputSelector from '../../components/form-input-option/form-input-option.component';

import PageCard from '../../components/page-card/page-card.component';

import './post-page.styles.css';

const InitialState = {
    firstname:'',
    nameError:'',
    lastname:'',
    secondNameError: '',
    email:'',
    emailError:'',
    articletitle:'',
    articletitleError:'',
    latitude:'',
    latitudeError:'',
    longitude:'',
    longitudeError:'',
    tag:'',
    article:'',
    articleError:'',
    characterLength: 2500,
}

class PostPage extends React.Component {
    constructor(props){
        super(props);

        this.state = InitialState
    }

    validate = () => {
        let nameError = "";
        let secondNameError = "";
        let emailError = "";
        let articletitleError= "";
        let latitudeError = "";
        let longitudeError = "";
        let articleError = "";

        if (!this.state.firstname){
            nameError = "error"
        }
        if (!this.state.lastname){
            secondNameError = "error"
        }
        if (!this.state.email.includes("@")){
            emailError = "error"
        }
        if (!this.state.articletitle){
            articletitleError = "error"
        }
        if (!this.state.latitude ){
            latitudeError = "error"
        }
        if (!this.state.longitude){
            longitudeError = "error"
        }
        if (!this.state.article || this.state.article.length< 2500){
            articleError = "error"
        }

        if(nameError || secondNameError || emailError || articletitleError || latitudeError || longitudeError || articleError){
            this.setState({nameError, secondNameError, emailError, articletitleError, latitudeError, longitudeError, articleError});
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state)
            this.setState(InitialState);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value, characterLength: 2500 - (this.state.article.length) });
    }

    render(){
        const { 
            firstname, 
            nameError, 
            lastname, 
            secondNameError, 
            email, 
            emailError, 
            articletitle,
            articletitleError,
            latitude,
            latitudeError,
            longitude,
            longitudeError,
            tag,
            article, 
            articleError,
            characterLength
        } = this.state;
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
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='firstname'
                            type='text'
                            onChange={this.handleChange}
                            value={firstname}
                            label='First name'
                            error={nameError}
                        />
                        
                        <FormInput
                            name='lastname'
                            type='text'
                            onChange={this.handleChange}
                            value={lastname}
                            label='Last name'
                            error={secondNameError}
                        />
                        
                        <FormInput
                            name='email'
                            type='email'
                            onChange={this.handleChange}
                            value={email}
                            label='Email'
                            error={emailError}
                        /> 
                        <FormInput
                            name='articletitle'
                            type='text'
                            onChange={this.handleChange}
                            value={articletitle}
                            label='Article Title'
                            error={articletitleError}
                         />
                        <FormInput
                            name='latitude'
                            type='number'
                            onChange={this.handleChange}
                            value={latitude}
                            label='Latitude'
                            error={latitudeError}
                        />  
                        
                        <FormInput
                            name='longitude'
                            type='number'
                            onChange={this.handleChange}
                            value={longitude}
                            label='Longitude'
                            error={longitudeError}
                        />
                        
                        <FormInputSelector
                            name='tag'
                            onChange={this.handleChange}
                            value={tag}
                            label='Tag'
                        />
                        
                        <FormInputTextbox
                            name='article'
                            type='textarea'
                            onChange={this.handleChange}
                            value={article}
                            label='Article'
                            rows="4"
                            error={articleError}
                            length={characterLength}
                        />
                        <div className='button-container'>
                            <CustomButton type='submit'> Post </CustomButton>
                        </div>
                    </form>
                </PageCard>
            </div>
        );
    };
};

export default PostPage;
