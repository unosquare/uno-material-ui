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

    public showSnackbar(message: string, type = 'success', seconds = 5000): Promise<{}> {
        return new Promise(() => {
            this.snackbar = {
                isMobile: false,
                message: {
                    messageText: message,
                    messageType: type,
                },
                seconds,
            };
            this.inform();
        });
    }
}

export const snackbarService = new SnackbarService();
