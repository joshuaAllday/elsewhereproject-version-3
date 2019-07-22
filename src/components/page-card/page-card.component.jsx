import React from 'react';

import './page-card.styles.css';

const PageCard = ({ children }) => (
    <div className='page-container'>
        { children }
    </div>
);

export default PageCard;