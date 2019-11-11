import Button from '@material-ui/core/Button';
import * as React from 'react';
import { SafeLoading } from '../../src';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const startFetching = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <React.Fragment>
            <Button variant='contained' color='primary' onClick={startFetching}>Start loading</Button>
            <SafeLoading isLoading={fetching} />
        </React.Fragment>
    );
};
