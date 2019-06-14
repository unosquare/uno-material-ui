import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    linearProgress: {
        height: '20px',
        marginTop: '10px',
    },
});

export const FixedLinearProgress = ({ isLoading = false }) => {
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
