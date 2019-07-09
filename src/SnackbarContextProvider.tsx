import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';

interface ISnackbarContext {
    sendMessage: (
        mode: boolean,
        text: string,
        type?: string,
    ) => void;
}

export const SnackbarContext = React.createContext<ISnackbarContext>({
    sendMessage: null,
});

export const SnackbarContextProvider: React.FunctionComponent = ({ children }) => {
    const [getMessage, setMessage] = React.useState({
        messageText: '',
        messageType: 'success',
    });
    const [snackbarMode, setSnackbarMode] = React.useState(false);

    const [providerValue] = React.useState({
        sendMessage: (mode: boolean, text: string, type = 'success') => {
            setMessage({
                messageText: text,
                messageType: type,
            });
            setSnackbarMode(mode);
        },
    });

    return (
        <SnackbarContext.Provider value={providerValue}>
            {children}
            <GlobalSnackbar
                seconds={5000}
                message={getMessage}
                mobile={snackbarMode}
            />
        </SnackbarContext.Provider>
    );
};
