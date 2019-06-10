import Button from '@material-ui/core/Button';
import * as React from 'react';
import { GlobalSnackbar } from '../../src/';

export default () => {
    const [message, setMessage] = React.useState({});
    const [mobile, setMobile] = React.useState(false);
    const info = { messageText: 'Hey! Check this snackbar', messageType: 'info' };
    const warning = { messageText: 'Hey! Be careful', messageType: 'warning' };
    const error = { messageText: 'Hey! This is broken', messageType: 'error' };
    const success = { messageText: 'Hey! Everything is awesome', messageType: 'success' };

    const onOpenInfo = () => {
        setMobile(false);
        setMessage(info);
    };
    const onOpenWarning = () => {
        setMobile(false);
        setMessage(warning);
    };
    const onOpenError = () => {
        setMobile(false);
        setMessage(error);
    };
    const onOpenSuccess = () => {
        setMobile(true);
        setMessage(success);
    };

    return (
        <React.Fragment>
            <Button onClick={onOpenInfo}>Open Info Snackbar</Button>
            <Button onClick={onOpenWarning}>Open Warning Snackbar</Button>
            <Button onClick={onOpenError}>Open Error Snackbar</Button>
            <Button onClick={onOpenSuccess}>Open Success Snackbar</Button>
            {message.messageText && <GlobalSnackbar message={message} seconds={5000} mobile={mobile} />}
        </React.Fragment>
    );
};
