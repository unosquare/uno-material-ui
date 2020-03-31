import { SimpleObservable } from 'uno-js';
import { MessageType } from './GlobalSnackbar';

export interface Snackbar {
    message: { messageText: string; messageType: MessageType };
    milliSeconds?: number;
    isMobile: boolean;
}

class SnackbarService extends SimpleObservable {
    private snackbar: Snackbar;

    public getSnackbar(): Snackbar {
        return this.snackbar;
    }

    public showSnackbar(message: string, type: MessageType = 'success', milliSeconds = 5000): Promise<{}> {
        return new Promise(() => {
            this.snackbar = {
                isMobile: false,
                message: {
                    messageText: message,
                    messageType: type,
                },
                milliSeconds,
            };
            this.inform();
        });
    }
}

export const snackbarService = new SnackbarService();
