import * as React from 'react';
import { debounce } from 'uno-react';
import { GlobalSnackbar } from './GlobalSnackbar';

interface ISnackbarContext {
    sendMessage: (
        text: string,
        type?: string,
    ) => void;
}

export const SnackbarContext = React.createContext<ISnackbarContext>({
    sendMessage: null,
});

const updateComponentByResolution = (setMobileResolution: any) => () => {
    setMobileResolution(window.outerWidth < 1000);
};

export const SnackbarContextProvider: React.FunctionComponent = ({ children }) => {
    const [getMessage, setMessage] = React.useState({
        messageText: '',
        messageType: 'success',
    });
    const [snackbarMode, setSnackbarMode] = React.useState(false);
    const listener = updateComponentByResolution(setSnackbarMode);
    const resizeListener = debounce(listener, 1500);

    React.useEffect(() => {
        setSnackbarMode(window.outerWidth < 1000);
        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    const [providerValue] = React.useState({
        sendMessage: (text: string, type = 'success') => {
            setMessage({
                messageText: text,
                messageType: type,
            });
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
