import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { ButtonWithLoading } from '../../src/';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const submit = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <ValidatorForm onSubmit={submit}>
            <ButtonWithLoading
                isFetching={fetching}
                variant='contained'
                color='primary'
                type='submit'
                size='large'
            >
                Save
            </ButtonWithLoading>
        </ValidatorForm>
    );
};
