import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../redux/modal/modal.actions';

import './modal-overlay.styles.css';

const ModalOverlay = ({ toggleModal}) => (
    <div className='modal-container' onClick={toggleModal} />
);

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
});
  
export default connect(null, mapDispatchToProps)(ModalOverlay);