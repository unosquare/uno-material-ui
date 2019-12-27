import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import * as React from 'react';
import { ValidatorForm } from 'uno-react';

const useDialogStyles = makeStyles({
    root: { overflowY: 'visible' },
});

export type FormModalProps = DialogProps & {
    actions?: JSX.Element;
    onClose?: (event: any) => void;
    onSubmit: (event: any) => void;
    open: boolean;
    title: string;
    validatorForm?: any;
};

export const FormModal: React.FunctionComponent<FormModalProps> = ({
    actions,
    children,
    onClose,
    onSubmit,
    validatorForm,
    open,
    title,
    ...dialogProps
}: FormModalProps) => {
    const classes = useDialogStyles({});

    return (
        <Dialog
            onClose={onClose}
            onExit={onClose}
            open={open}
            PaperProps={{ component: validatorForm || ValidatorForm, onSubmit, classes }}
            {...dialogProps}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent style={{ overflowY: 'visible' }}>{children}</DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
        </Dialog>
    );
};
