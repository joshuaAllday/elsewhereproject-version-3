import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

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
            <NavLink className='option-link' exact to='/' activeStyle={{ textDecoration: 'underline' }}>
                Home
            </NavLink>
            <NavLink className='option-link' to='/about' activeStyle={{ textDecoration: 'underline' }}>
                About
            </NavLink>
            <NavLink className='option-link' to='/map' activeStyle={{ textDecoration: 'underline' }}>
                Map
            </NavLink>
            <NavLink className='option-link' to='/post' activeStyle={{ textDecoration: 'underline' }}>
                Post
            </NavLink>
            {
                currentUser ? (
                    <div className='option-link' as='div' onClick={toggleAdminDropdown}>
                        Admin
                    </div>     
                ) : (
                    null
                )
            }
            {hidden ? null : <AdminDropdown />}
        </div>
        <div className='option-toggle' onClick={toggleNavigation}>
            <div className='burger-icon-container'>
                <div className={`${hiddenNav ? '' : 'change1'} bar1`}></div>
                <div className={`${hiddenNav ? '' : 'change2'} bar2`}></div>
                <div className={`${hiddenNav ? '' : 'change3'} bar3`}></div>
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