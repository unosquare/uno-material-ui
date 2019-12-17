import { SimpleObservable } from 'uno-js';
export interface ISnackbar {
    message: {
        messageText: string;
        messageType: string;
    };
    seconds?: number;
    isMobile: boolean;
}
declare class SnackbarService extends SimpleObservable {
    private snackbar;
    getSnackbar(): ISnackbar;
    showSnackbar(message: string, type?: string): Promise<any>;
}
export declare const snackbarService: SnackbarService;
export {};
