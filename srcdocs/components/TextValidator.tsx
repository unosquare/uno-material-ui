import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from '../../src/';
import { useStateForModel } from 'uno-react';

export default () => {
    const [data, handleChange] = useStateForModel({name: ''});

    const sendData = () => handleChange({name: ''});

    return (
        <ValidatorForm onSubmit={sendData}>
            <TextValidator
                id='name'
                label='Name'
                name='name'
                onChange={handleChange}
                value={data.name}
                validators={['required']}
                errorMessages={[
                    'This field is required',
                ]}
            />
            <Button type='submit'>Submit</Button>
        </ValidatorForm>
    );
};
