import React from 'react';

import MapComponentContainer from '../../components/map/map.container';

import './map-page.styles.css';

class MapPage extends React.Component{ 
    render(){
        return(
            <div className='map-page-container'>
                <MapComponentContainer />
            </div>
        );
    };
};

export default MapPage;



