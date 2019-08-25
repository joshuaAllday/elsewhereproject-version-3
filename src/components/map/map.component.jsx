import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Modal from '../modal/modal.component';
import ModalArticle from '../modal-article/modal-article.component';

import { selectModalHidden } from '../../redux/modal/modal.selectors';
import { toggleModal } from '../../redux/modal/modal.actions';
import { selectCollections } from '../../redux/articles/articles.selectors';

import { REACT_APP_GOOGLEAPI } from '../../config';

import './map.styles.css';
import {styling} from './map-styling.js';

class MapComponent extends React.Component {
  constructor(){
    super();
    this.state={
      article: ''
    }
  }
  componentDidMount(){
		this.renderMap();
	}

    renderMap(){
        loadScript();
        window.initMap = this.initMap;
    };

    modalToggle(article){
      console.log(article)
    };

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'),{
            center: { lat: 51.5074, lng: 0.1278},
            zoom: 3,
            disableDefaultUI: true, 
            restriction:{
                latLngBounds:{north: 85, south: -85, west: -180, east:180},
                strictBounds:false
            },
            styles: styling
        })
        var z1 = { minZoom: 3 };
        var z2 = { maxZoom: 12};
        map.setOptions(z1);
        map.setOptions(z2);
        var input = document.getElementById('pac-input');
        var searchBox = new window.google.maps.places.SearchBox(input);
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length === 0) {
            return;
          }

              // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

            // For each place, get the icon, name and location.
          var bounds = new window.google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new window.google.maps.Size(0, 0),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(25, 25)
            };

                // Create a marker for each place.
            markers.push(new window.google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                  // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
        // eslint-disable-next-line
        this.props.collections.map((article) => {
            var articleid = article;
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
              position: {lat: article.latitude , lng: article.longitude},
              map: map,
              icon:{
                url: "http://maps.google.com/mapfiles/ms/icons/" + dot +"-dot.png"
              }
            })
            marker.addListener('click', (e) => {
              this.setState({article: articleid});
              return this.props.toggleModal()
            },false)
        })
    }

    render(){
        const { hidden } = this.props;
        return(
            <div>
              {hidden
                ? null
                : <Modal>
                    <ModalArticle article={this.state.article} /> 
                  </Modal>
              }
              <div id="map"></div>
              <input 
                    id="pac-input" 
                    name='search'
                    type='search'
                    placeholder='search'
                    className='form-input-search'
              />
            </div>
        );
    };
};

function loadScript(){
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
	script.src = REACT_APP_GOOGLEAPI
	script.async = true
	script.defer = true
	index.parentNode.insertBefore(script,index)
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
    hidden: selectModalHidden
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

