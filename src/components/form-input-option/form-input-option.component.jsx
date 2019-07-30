import React from 'react';

import './form-input-option.styles.css';

const FormInputOption = () => (
    <div className='select-container'>
        <select className='select'>
            <option className='option' value="Article">Article</option>
            <option className='option' value="Business">Business</option>
            <option className='option' value="News">News</option>
            <option className='option' value="Politics">Politics</option>
            <option className='option' value="Travel">Travel</option>
        </select>
    </div>
);

export default FormInputOption;
