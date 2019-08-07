import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import PageCard from '../../components/page-card/page-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {registerStartAsync} from '../../redux/users/users.actions';

import './register-page.styles.css';

const Initial_State = {
    username:'',
    usernameError: '',
    password: '',
    passwordError:'',
    passwordcheck:'',
    passwordcheckError:''
};

class RegisterPage extends React.Component {
    constructor(){
        super();
        this.state = Initial_State
    };

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        let passwordcheckError ="";

        if (!this.state.username){
            usernameError = "error"
        }
        if( !this.state.password){
            passwordError = "error"
        }
        if(!this.state.passwordcheck || this.state.password !== this.state.passwordcheck){
            passwordcheckError = "error"
        }

        if(usernameError || passwordError || passwordcheckError){
            this.setState({usernameError, passwordError, passwordcheckError});
            return false;
        }

        return true;
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, password, passwordcheck } = this.state;
        const{ registerStartAsync } = this.props;
        const isValid = this.validate();
        if(isValid){
            console.log(username, password, passwordcheck);
            registerStartAsync(username, password);
            this.setState(Initial_State);
        }
    };

    render(){
        const { username, usernameError, password, passwordError, passwordcheck, passwordcheckError } = this.state;
        return(
            <div className='register-page-container'>
                <PageCard>
                    <p>
                        Register an admin here! Enter a unique username and password.
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='username'
                            type='text'
                            label='Username'
                            value={username}
                            onChange={this.handleChange}
                            error={usernameError}
                        />
                        <FormInput 
                            name='password'
                            type='password'
                            label='Password'
                            value={password}
                            onChange={this.handleChange}
                            error={passwordError}
                        />
                        <FormInput 
                            name='passwordcheck'
                            type='password'
                            label='Password Check'
                            value={passwordcheck}
                            onChange={this.handleChange}
                            error={passwordcheckError}
                        />
                        <div className='register-button-container'>
                            <CustomButton type='submit'> Register </CustomButton>
                        </div>
                    </form>
                </PageCard>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    registerStartAsync: (username, password) => 
    dispatch(registerStartAsync({username, password}))
});

export default connect(null, mapDispatchToProps)(RegisterPage);
