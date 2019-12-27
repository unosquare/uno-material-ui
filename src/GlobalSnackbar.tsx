import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Close from '@material-ui/icons/Close';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles(({ palette }: Theme) => ({
    closeIcon: {
        color: '#fff !important',
        fontSize: '20px  !important',
    },
    error: {
        backgroundColor: palette ? `${palette.error.main} !important` : `${red[600]} !important`,
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
        backgroundColor: palette ? `${palette.primary.main} !important` : `${blue[600]} !important`,
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

export interface GlobalSnackbarProps {
    message: { messageText: string; messageType: string };
    seconds: number;
    mobile: boolean;
}

export const GlobalSnackbar: React.FunctionComponent<GlobalSnackbarProps> = ({
    message,
    seconds = 2500,
    mobile = false,
}) => {
    const classes = useStyles({});
    const [open, setOpen] = React.useState(false);

    const getIconStyle = (): string => (mobile ? classes.iconMobile : classes.icon);

    const getIcon = (): JSX.Element => {
        switch (message.messageType) {
            case 'info':
                return <Info className={getIconStyle()} />;
            case 'warning':
                return <Warning className={getIconStyle()} />;
            case 'error':
                return <Error className={getIconStyle()} />;
            default:
                return <CheckCircle className={getIconStyle()} />;
        }
    };

    const getStyle = (): string => {
        switch (message.messageType) {
            case 'info':
                return classes.info;
            case 'warning':
                return classes.warning;
            case 'error':
                return classes.error;
            default:
                return classes.success;
        }
    };

    const getTextStyle = (): string => (mobile ? classes.textMobile : classes.text);
    const onClose = (): void => setOpen(false);

    React.useEffect(() => {
        if (message && message.messageText !== '') {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, seconds);
        }
    }, [message]);

    const anchorOrigin: SnackbarOrigin = {
        horizontal: mobile ? 'center' : 'right',
        vertical: 'bottom',
    };

    return (
        <Snackbar anchorOrigin={anchorOrigin} className={getStyle()} open={open}>
            <SnackbarContent
                className={getStyle()}
                message={
                    <Typography className={getTextStyle()}>
                        {getIcon()} {message.messageText}
                    </Typography>
                }
                action={
                    !mobile && (
                        <IconButton onClick={onClose}>
                            <Close className={classes.closeIcon} />
                        </IconButton>
                    )
                }
            />
        </Snackbar>
    );
};
