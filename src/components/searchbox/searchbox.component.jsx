import React from 'react';

import FormInput from '../form-input/form-input.component';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchbarbox">
      <FormInput
        name='search'
        type='search'
        onChange={searchChange}
        placeholder='search'
      />
    </div>
  );
}

export default SearchBox;