import React from 'react';

import {
    GroupContainer, 
    FormInputContainer,
    FormInputLabel
} from './form-input-edit-textbox.styles';

const FormInputEditTextbox = ({handelChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handelChange} {...props} />
        {label ? (
            <FormInputLabel {...props} className={props.defaultValue ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ): null}
    </GroupContainer>
);

export default FormInputEditTextbox;