import React from 'react';

const ScrollableContainer = ({ children }) => (
    <div style={{
            overflowY: 'scroll',
            height: '30vh',
            border: '1px solid black' 
        }}
    >
        { children }
    </div>
);

export default ScrollableContainer;