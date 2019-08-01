import React from 'react';

import {
    GroupContainer, 
    FormInputContainer,
    FormInputLabel
} from './form-input-textbox.styles';

const FormInputTextbox = ({handelChange, label, length, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handelChange} {...props} />
        {label ? (
            <FormInputLabel {...props} className={props.value.length ? 'shrink' : ''}>
                {label} / {length} characters needed
            </FormInputLabel>
        ): null}
    </GroupContainer>
);

export default FormInputTextbox;