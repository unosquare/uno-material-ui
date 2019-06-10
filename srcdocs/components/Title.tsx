import Typography from '@material-ui/core/Typography';
import * as React from 'react';

function Title({ prefix, suffix, value, titleClass }: any) {
    return <Typography variant='h4' className={titleClass}>{value}</Typography>;
}

export default () => (
    <Title prefix='Unosquare' suffix='Uno-Material-UI' value='This is a title' />
);
