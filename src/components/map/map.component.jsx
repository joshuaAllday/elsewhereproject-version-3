import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Modal from '../modal/modal.component';
import ModalArticle from '../modal-article/modal-article.component';

import { selectModalHidden } from '../../redux/modal/modal.selectors';
import { toggleModal } from '../../redux/modal/modal.actions';
import { selectCollections } from '../../redux/articles/articles.selectors';

import './map.styles.css';

class MapComponent extends React.Component {
  constructor(){
    super();
    this.state={
      article: '',
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
            }
        })
        var z1 = { minZoom: 3 };
        var z2 = { maxZoom: 12};
        map.setOptions(z1);
        map.setOptions(z2);
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
              position: {lat: 22 , lng: 22},
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
    collections: selectCollections,
    hidden: selectModalHidden
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

