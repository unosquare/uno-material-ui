import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { snackbarService } from '../../src/SnackbarService';

const useStyles = makeStyles({
    error: {
        color: 'red',
        marginBottom: '40px',
    },
    info: {
        color: 'blue',
        marginBottom: '40px',
        marginRight: '20%',
    },
    success: {
        color: 'green',
        marginTop: '30px',
    },
    warning: {
        color: 'orange',
        marginBottom: '40px',
        marginRight: '20%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);
    const info = { messageText: 'Hey! Check this snackbar', messageType: 'info' };
    const warning = { messageText: 'Hey! Be careful', messageType: 'warning' };
    const error = { messageText: 'Hey! This is broken', messageType: 'error' };
    const success = { messageText: 'Hey! Everything is awesome', messageType: 'success' };

    const onOpenInfo = () => {
        snackbarService.showSnackbar(info.messageText, info.messageType);
    };
    const onOpenWarning = () => {
        snackbarService.showSnackbar(warning.messageText, warning.messageType);
    };
    const onOpenError = () => {
        snackbarService.showSnackbar(error.messageText, error.messageType);
    };
    const onOpenSuccess = () => {
        snackbarService.showSnackbar(success.messageText);
    };

    return (
        <React.Fragment>
            <Button className={classes.info} onClick={onOpenInfo}>Open Info Snackbar</Button>
            <Button className={classes.warning}onClick={onOpenWarning}>Open Warning Snackbar</Button>
            <Button className={classes.error}onClick={onOpenError}>Open Error Snackbar</Button>
            <Typography>It is also available in mobile version</Typography>
            <Button className={classes.success}onClick={onOpenSuccess}>Open Success Mobile Snackbar</Button>
        </React.Fragment>
    );
};
