import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles((theme: any) => ({
    linearProgress: {
        height: theme.spacing.unit * 2,
    },
}));

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
