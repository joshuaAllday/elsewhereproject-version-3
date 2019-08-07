import React from 'react';
import { connect } from 'react-redux';

import PageCard from '../../components/page-card/page-card.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInStartAsync } from '../../redux/users/users.actions';

import './login.styles.css';

const InitialState = {
    username:'',
    usernameError:'',
    password:'',
    passwordError:''
}

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state= InitialState
    }

    validated = () => {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username){
            usernameError = "error";
        }
        if (!this.state.password){
            passwordError = "error"
        }
        if(usernameError || passwordError){
            this.setState({ usernameError, passwordError})
            return false;
        }
        return true;
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { signInStartAsync } = this.props;
        const { username, password } = this.state;
        const isValid = this.validated();
        if (isValid){    
            console.log(username, password);
            signInStartAsync(username, password);
            this.setState(InitialState);
        }
    }

    render(){
        const { username, usernameError, password, passwordError } = this.state;
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
                            error={usernameError}
                        />
                        <FormInput
                            name='password'
                            type='text'
                            onChange={this.handleChange}
                            value={password}
                            label='Password'
                            error={passwordError}
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

const mapDispatchToProps = dispatch => ({
    signInStartAsync: (username, password) => 
        dispatch(signInStartAsync({username, password}))
});

export default connect(null, mapDispatchToProps)(LoginPage);
