import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    linearProgress: {
        height: '20px',
    },
}));

export const LinearProgress = ({ isLoading = false }) => {
    const classes = useStyles();
    return (
        <div className={classes.linearProgress}>
            {
                isLoading &&
                <LinearProgress />
            }
        </div>
    );
};
