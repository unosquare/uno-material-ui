import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';
import { ISnackbar, snackbarService } from './SnackbarService';

export const SnackbarContainer: React.FunctionComponent = () => {
    const [snackbar, setSnackbar] = React.useState<ISnackbar>();

    React.useEffect(() => {
        snackbarService.subscribe(onUpdate);
    }, []);

    const onUpdate = (): void => setSnackbar({ ...snackbarService.getSnackbar() });

    if (!snackbar) {
        return null;
    }

    return <GlobalSnackbar seconds={5000} message={snackbar.message} mobile={snackbar.isMobile} />;
};
