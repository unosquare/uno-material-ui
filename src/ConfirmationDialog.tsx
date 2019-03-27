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

export const ConfirmationDialog = ({
    contentText,
    title,
    onAgreeAction,
    onClose,
    open,
    agree = 'Agree',
    disagree = 'Disagree',
    textColor = 'textSecondary',
}: any) => {
    const handleAgree = (e: any) => onAgreeAction(e);

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography color={textColor}>{contentText}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onClose &&
                    <Button onClick={onClose} style={buttonStyle} color='secondary' variant='contained'>
                        {disagree}
                    </Button>
                }
                {onAgreeAction &&
                    <Button onClick={handleAgree} color='primary' autoFocus={true} variant='contained'>
                        {agree}
                    </Button>
                }
            </DialogActions>
        </Dialog>
    );
};
