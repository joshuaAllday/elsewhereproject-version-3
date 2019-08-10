import React from 'react';

const ScrollableContainer = ({ children }) => (
    <div style={{
            overflowY: 'scroll',
            height: '500px'
        }}
    >
        { children }
    </div>
);

export default ScrollableContainer;