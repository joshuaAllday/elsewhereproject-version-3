import React from 'react';

import {
    GroupContainer, 
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';

import './form-input.styles';

const FormInput = ({handelChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handelChange} {...props} />
        {label ? (
            <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ): null}
    </GroupContainer>
);

export default FormInput;