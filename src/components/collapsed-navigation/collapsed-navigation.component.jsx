import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/users/users.selectors';
import { signOutStartAsync } from '../../redux/users/users.actions';
import { toggleNavigation } from '../../redux/dropdown/dropdown.actions';

import './collapsed-navigation.styles.css';

const CollapsedNavigation = ({currentUser, toggleNavigation, signOutStartAsync}) => (
    <div className='collapsed-option-container'>
        <NavLink 
            className='collapsed-option-link' 
            exact 
            onClick={toggleNavigation} 
            to='/' 
            activeStyle={{ 
                background:'white', opacity: '0.6' 
            }}
        >
            Home
        </NavLink>
        <NavLink 
            className='collapsed-option-link' 
            onClick={toggleNavigation} 
            to='/about'
            activeStyle={{ 
                background:'white', opacity: '0.6' 
            }}
        >
            About
        </NavLink>
        <NavLink 
            className='collapsed-option-link' 
            onClick={toggleNavigation} 
            to='/map'
            activeStyle={{ 
                background:'white', opacity: '0.6' 
            }}
        >
            Map
        </NavLink>
        <NavLink 
            className='collapsed-option-link' 
            onClick={toggleNavigation} 
            to='/post'
            activeStyle={{ 
                background:'white', opacity: '0.6' 
            }}
        >
            Post
        </NavLink>
        {
            currentUser
            ? ( <>
                    <NavLink to='/edit-articles' 
                        onClick={toggleNavigation} 
                        className='collapsed-option-link'
                        activeStyle={{ 
                            background:'white', opacity: '0.6' 
                        }}
                    > 
                        Edit Articles 
                    </NavLink>
                    <NavLink 
                        to='/register-user' 
                        onClick={toggleNavigation} 
                        className='collapsed-option-link'
                        activeStyle={{ 
                            background:'white', opacity: '0.6' 
                        }}
                    > 
                        Register User 
                    </NavLink>
                    <div onClick={signOutStartAsync} className='collapsed-option-link'> Sign Out </div>
                </>
            ) : null
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // hidden: selectDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleNavigation: () => dispatch(toggleNavigation()),
    signOutStartAsync: () => dispatch(signOutStartAsync())

});

export default connect(mapStateToProps, mapDispatchToProps)(CollapsedNavigation);