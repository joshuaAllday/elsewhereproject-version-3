import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/articles/articles.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import mapComponent from './map.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const MapComponentContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(mapComponent);  

export default MapComponentContainer;