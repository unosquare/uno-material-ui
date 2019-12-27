import { SimpleObservable } from 'uno-js';

export interface Snackbar {
    message: { messageText: string; messageType: string };
    seconds?: number;
    isMobile: boolean;
}

class SnackbarService extends SimpleObservable {
    private snackbar: Snackbar;

    public getSnackbar(): Snackbar {
        return this.snackbar;
    }

    public showSnackbar(message: string, type = 'success'): Promise<{}> {
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
