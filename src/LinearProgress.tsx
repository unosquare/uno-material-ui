import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    linearProgress: {
        height: theme.spacing.unit * 2,
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
