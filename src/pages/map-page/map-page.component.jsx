import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MapComponentContainer from '../../components/map/map.container';
import MapDropdown from '../../components/map-dropdown/map-dropdown.component';

import { toggleMapDropdown } from '../../redux/dropdown/dropdown.actions';
import { selectMapDropdownHidden } from '../../redux/dropdown/dropdown.selectors';

import './map-page.styles.css';

const MapPage = ({hiddenMap,toggleMapDropdown}) => (
    <div className='map-page-container'>
        {
            hiddenMap
            ? <MapDropdown />
            : null
        }
        <div className='map-button-container' onClick={toggleMapDropdown}>
            <i className="fas fa-th"></i>
        </div>
        <MapComponentContainer />
    </div>
);

const mapStateToProps = createStructuredSelector({
    hiddenMap: selectMapDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleMapDropdown: () => dispatch(toggleMapDropdown())
});

export default connect(mapStateToProps,mapDispatchToProps)(MapPage);



