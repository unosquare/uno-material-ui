import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Close';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
const useStyles = makeStyles((theme) => ({
    closeIcon: {
        color: '#fff !important',
        fontSize: '20px  !important',
    },
    error: {
        backgroundColor: theme.palette ? `${theme.palette.error.main} !important` : `${red[600]} !important`,
        display: 'flex !important',
    },
    icon: {
        fontSize: '20px  !important',
        marginRight: '15px  !important',
    },
    iconMobile: {
        fontSize: '34px  !important',
        marginRight: '15px  !important',
    },
    info: {
        backgroundColor: theme.palette ? `${theme.palette.primary.main} !important` : `${blue[600]} !important`,
        display: 'flex !important',
    },
    success: {
        backgroundColor: `${green[600]} !important`,
        display: 'flex !important',
    },
    text: {
        alignItems: 'center',
        color: '#fff !important',
        display: 'inline-flex !important',
        fontSize: '18px !important',
    },
    textMobile: {
        color: '#fff !important',
        display: 'inline-flex !important',
        fontSize: '28px !important',
    },
    warning: {
        backgroundColor: `${amber[700]} !important`,
        display: 'flex !important',
    },
}));
const GlobalSnackbar = ({ message, seconds = 2500, mobile = false }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const getIcon = () => {
        switch (message.messageType) {
            case 'info': return React.createElement(Info, { className: getIconStyle() });
            case 'warning': return React.createElement(Warning, { className: getIconStyle() });
            case 'error': return React.createElement(Error, { className: getIconStyle() });
            default: return React.createElement(CheckCircle, { className: getIconStyle() });
        }
    };
    const getStyle = () => {
        switch (message.messageType) {
            case 'info': return classes.info;
            case 'warning': return classes.warning;
            case 'error': return classes.error;
            default: return classes.success;
        }
    };
    const getTextStyle = () => (mobile ? classes.textMobile : classes.text);
    const getIconStyle = () => (mobile ? classes.iconMobile : classes.icon);
    const onClose = () => setOpen(false);
    React.useEffect(() => {
        if (message && message.messageText !== '') {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, seconds);
        }
    }, [message]);
    const anchorOrigin = {
        horizontal: mobile ? 'center' : 'right',
        vertical: 'bottom',
    };
    return (React.createElement(Snackbar, { anchorOrigin: anchorOrigin, className: getStyle(), open: open },
        React.createElement(SnackbarContent, { className: getStyle(), message: React.createElement(Typography, { className: getTextStyle() },
                " ",
                getIcon(),
                " ",
                message.messageText,
                " "), action: !mobile &&
                React.createElement(IconButton, { onClick: onClose },
                    React.createElement(Close, { className: classes.closeIcon })) })));
};
export default GlobalSnackbar;
