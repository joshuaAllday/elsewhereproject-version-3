import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/users/users.selectors';
import { signOutStartAsync } from '../../redux/users/users.actions';
import { toggleNavigation } from '../../redux/dropdown/dropdown.actions';

import './collapsed-navigation.styles.css';

const CollapsedNavigation = ({currentUser, toggleNavigation, signOutStartAsync}) => (
    <div className='collapsed-option-container'>
        <Link className='collapsed-option-link' onClick={toggleNavigation} to='/'>
            Home
        </Link>
        <Link className='collapsed-option-link' onClick={toggleNavigation} to='/about'>
            About
        </Link>
        <Link className='collapsed-option-link' onClick={toggleNavigation} to='/map'>
            Map
        </Link>
        <Link className='collapsed-option-link' onClick={toggleNavigation} to='/post'>
            Post
        </Link>
        {
            currentUser
            ? ( <>
                    <Link to='/edit-articles' onClick={toggleNavigation} className='collapsed-option-link'> Edit Articles </Link>
                    <Link to='/register-user' onClick={toggleNavigation} className='collapsed-option-link'> Register User </Link>
                    <Link as='div' onClick={signOutStartAsync} className='collapsed-option-link'> Sign Out </Link>
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