import React from 'react';

import {
    GroupContainer, 
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({handelChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handelChange} {...props} />
        {label ? (
            <FormInputLabel {...props} className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ): null}
    </GroupContainer>
);

export default FormInput;