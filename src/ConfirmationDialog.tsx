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

export interface ConfirmationDialogProps {
    contentText: string;
    title: string;
    onAgreeAction: (ev: React.MouseEvent) => void;
    onClose?: () => void;
    open: boolean;
    agree?: string;
    disagree?: string;
    textColor?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

export const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({
    contentText,
    title,
    onAgreeAction,
    onClose,
    open,
    agree = 'Agree',
    disagree = 'Disagree',
    textColor = 'textSecondary',
}: ConfirmationDialogProps) => {
    const [disabled, setDisabled] = React.useState(false);

    const handleAgree = (e: React.MouseEvent): void => {
        setDisabled(true);
        onAgreeAction(e);
    };

    const handleDisagree = (): void => {
        setDisabled(true);
        onClose();
    };

    if (disabled && !open) {
        setDisabled(false);
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography color={textColor}>{contentText}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onClose && (
                    <Button onClick={handleDisagree} style={buttonStyle} disabled={disabled} color="secondary">
                        {disagree}
                    </Button>
                )}
                {onAgreeAction && (
                    <Button
                        onClick={handleAgree}
                        color="primary"
                        disabled={disabled}
                        autoFocus={true}
                        variant="contained"
                    >
                        {agree}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};
