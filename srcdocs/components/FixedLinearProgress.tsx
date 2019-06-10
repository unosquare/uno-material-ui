import Button from '@material-ui/core/Button';
import * as React from 'react';
import { FixedLinearProgress } from '../../src';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const onLoading = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <React.Fragment>
            <FixedLinearProgress isLoading={fetching} />
            <Button onClick={onLoading}>Start loading!</Button>
        </React.Fragment>
    );
};
