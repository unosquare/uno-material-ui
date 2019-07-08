import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';

interface ISnackbarContext {
    sendMessage: (text: string, type?: string) => void;
}

export const SnackbarContext = React.createContext<ISnackbarContext>({
    sendMessage: null,
});

export const SnackbarContextProvider: React.FunctionComponent = ({ children }) => {
    const [getMessage, setMessage] = React.useState({
        messageText: '',
        messageType: 'success',
    });

    const [providerValue] = React.useState({
        sendMessage: (text: string, type = 'success') => setMessage({
            messageText: text,
            messageType: type,
        }),
    });

    return (
        <SnackbarContext.Provider value={providerValue}>
            {children}
            <GlobalSnackbar
                seconds={5000}
                message={getMessage}
                mobile={false}
            />
        </SnackbarContext.Provider>
    );
};