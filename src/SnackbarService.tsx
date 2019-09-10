import { SimpleObservable } from 'uno-react';

export interface ISnackbar {
    message: { messageText: string, messageType: string };
    seconds?: number;
    isMobile: boolean;
}

class SnackbarService extends SimpleObservable {
    private snackbar: ISnackbar;

    public getSnackbar(): ISnackbar {
        return this.snackbar;
    }

    public showSnackbar(message: string, type: string = 'success'): Promise<any> {
        return new Promise(() => {
            this.snackbar = {
                isMobile: false,
                message: {
                    messageText: message,
                    messageType: type,
                },
                seconds: 5000,
            };
            this.inform();
        });
    }
}

export const snackbarService = new SnackbarService();
