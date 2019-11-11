import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { FormSwitch } from '../../src';

export default () => {
    const [value, setValue] = React.useState(false);

    const onChange = () => {
        setValue(!value);
    };

    return (
        <ValidatorForm onSubmit={onChange}>
            <FormSwitch
                checked={value}
                label='Switchable'
                onChange={onChange}
            />
            <FormSwitch
                checked={true}
                disabled={true}
                label='Disabled'
                labelPlacement='bottom-start'
                onChange={onChange}
            />
        </ValidatorForm>
    );
};
