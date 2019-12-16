/// <reference types="react" />
export interface GlobalSnackbarProps {
    message: {
        messageText: string;
        messageType: string;
    };
    seconds: number;
    mobile: boolean;
}
export declare const GlobalSnackbar: ({ message, seconds, mobile }: GlobalSnackbarProps) => JSX.Element;
