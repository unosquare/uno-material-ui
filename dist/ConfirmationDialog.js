import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
const buttonStyle = {
    marginRight: '5px !important',
};
export const ConfirmationDialog = ({ contentText, title, onAgreeAction, onClose, open, agree = 'Agree', disagree = 'Disagree', textColor = 'textSecondary', }) => {
    const handleAgree = (e) => onAgreeAction(e);
    return (React.createElement(Dialog, { open: open, onClose: onClose },
        React.createElement(DialogTitle, null, title),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, null,
                React.createElement(Typography, { color: textColor }, contentText))),
        React.createElement(DialogActions, null,
            onClose &&
                React.createElement(Button, { onClick: onClose, style: buttonStyle, color: 'secondary', variant: 'contained' }, disagree),
            onAgreeAction &&
                React.createElement(Button, { onClick: handleAgree, color: 'primary', autoFocus: true, variant: 'contained' }, agree))));
};
