import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/users/users.selectors';
import { selectDropdownHidden, selectNavHidden } from '../../redux/dropdown/dropdown.selectors';
import { toggleAdminDropdown, toggleNavigation } from '../../redux/dropdown/dropdown.actions';

import CollapsedNavigation from '../collapsed-navigation/collapsed-navigation.component';
import AdminDropdown from '../admin-dropdown/admin-dropdown.component';

import './header.styles.css';

const Header = ({currentUser, hidden, hiddenNav, toggleAdminDropdown, toggleNavigation}) => (
    <div  className='header-container'>
        <div className={`options-container ${hiddenNav ? 'toggled' : 'toggle'}`}>
            <div className='collapsed-navigation-container'>
                <CollapsedNavigation />
            </div>
            <Link className='option-link' to='/'>
                Home
            </Link>
            <Link className='option-link' to='/about'>
                About
            </Link>
            <Link className='option-link' to='/map'>
                Map
            </Link>
            <Link className='option-link' to='/post'>
                Post
            </Link>
            {
                currentUser ? (
                    <Link className='option-link' as='div' onClick={toggleAdminDropdown}>
                        Admin
                    </Link>     
                ) : (
                    null
                )
            }
            {hidden ? null : <AdminDropdown />}
        </div>
        <div className='option-toggle' onClick={toggleNavigation}>
            <div className='burger-icon-container'>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectDropdownHidden,
    hiddenNav: selectNavHidden
});

const mapDispatchToProps = dispatch => ({
    toggleAdminDropdown: () => dispatch(toggleAdminDropdown()),
    toggleNavigation: () => dispatch(toggleNavigation())
});
  
export default connect(mapStateToProps,mapDispatchToProps)(Header);