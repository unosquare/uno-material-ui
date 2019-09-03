import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    errorBoundBody: {
        color: 'red',
        marginBottom: '30px',
    },
});

export default () => {
    const classes = useStyles({});

    return (
        <React.Fragment>
            <Typography className={classes.errorBoundBody} variant='h4'>
                Something went terribly wrong...
            </Typography>
            <Typography variant='h5'>
                Please, refresh the page.
            </Typography>
        </React.Fragment>
    );
};
