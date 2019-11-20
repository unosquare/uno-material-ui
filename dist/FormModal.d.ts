/// <reference types="react" />
import { DialogProps } from '@material-ui/core/Dialog';
export declare type FormModalProps = DialogProps & {
    actions?: JSX.Element;
    onClose?: (event: any) => void;
    onSubmit: (event: any) => void;
    open: boolean;
    title: string;
};
export declare const FormModal: (props: FormModalProps) => JSX.Element;
