import React from 'react';

import PageCard from '../../components/page-card/page-card.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './login.styles.css';

const InitialState = {
    username:'',
    password:''
}

class LoginPage extends React.Component{
    constructor(){
        super();
        this.state= InitialState
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        console.log(email, password)
        this.setState({ InitialState})
    }

    render(){
        const { username, password } = this.state;
        return(
            <div>
                <PageCard>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='username'
                            type='text'
                            onChange={this.handleChange}
                            value={username}
                            label='Username'
                        />
                        <FormInput
                            name='password'
                            type='text'
                            onChange={this.handleChange}
                            value={password}
                            label='Password'
                        />
                        <div className='button-container'>
                            <CustomButton type='submit'>
                                Sign In
                            </CustomButton>
                        </div>
                    </form>
                </PageCard>
            </div>
        );
    };
};

export default LoginPage;
