import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectCollections } from '../../redux/articles/articles.selectors';

import './map.styles.css';

class MapComponent extends React.Component {
    componentDidMount(){
		this.renderMap();
	}

    renderMap(){
        loadScript();
        window.initMap = this.initMap;
    };

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'),{
            center: { lat: 51.5074, lng: 0.1278},
            zoom: 3,
            disableDefaultUI: true, 
            restriction:{
                latLngBounds:{north: 85, south: -85, west: -180, east:180},
                strictBounds:false
            }
        })
        var z1 = { minZoom: 3 };
        var z2 = { maxZoom: 12};
        map.setOptions(z1);
        map.setOptions(z2);
        var infowindow = new window.google.maps.InfoWindow()
        // eslint-disable-next-line
        this.props.collections.map((article) => {
            var contentString = '<div id="content">'+
              `<div id= "container">`+
              `<h1 id="firstHeading" class="firstHeading">${article.name}</h1>`+
              `</div>`+
              '</div>';

            var dot = "red"
            if (article.tag === 'News') {
                  dot = "green"
            }
            if (article.tag ==='Nature'){
              dot = "purple"
            }
            if (article.tag === 'Article'){
              dot = "pink"
            }
            if (article.tag === 'Travel'){
              dot = "blue"
            }
            if (article.tag === 'Business'){
              dot = "red"
            }
            // Create A Marker
            var marker = new window.google.maps.Marker({
              position: {lat: 22 , lng: 22},
              map: map,
              icon:{
                url: "http://maps.google.com/mapfiles/ms/icons/" + dot +"-dot.png"
              }
            })
            // Click on A Marker!
            marker.addListener('mouseover', function() {

              // Change the content
              infowindow.setContent(contentString)

              // Open An InfoWindow
              infowindow.open(map, marker)
            },false)

            marker.addListener('mouseout', function(){
              infowindow.close(map,marker)
            },false)

            marker.addListener('click', function(){
              window.location.href = this.url;
            }, false)
        })
    }

    render(){
        return(
            <div>
                <div id="map"></div>
            </div>
        );
    };
};

function loadScript(){
    var index = window.document.getElementsByTagName("script")[0]
	var script = window.document.createElement("script")
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmTWa4uGhw1vXVzvAAvkD-5rNbESORkJs&libraries=places&callback=initMap"
	script.async = true
	script.defer = true
	index.parentNode.insertBefore(script,index)
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(MapComponent);

