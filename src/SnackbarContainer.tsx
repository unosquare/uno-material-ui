import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';
import { Snackbar, snackbarService } from './SnackbarService';

export const SnackbarContainer: React.FunctionComponent = () => {
    const [snackbar, setSnackbar] = React.useState<Snackbar>();

    const onUpdate = (): void => setSnackbar({ ...snackbarService.getSnackbar() });

    React.useEffect(() => {
        snackbarService.subscribe(onUpdate);
    }, []);

    if (!snackbar) {
        return null;
    }

    return <GlobalSnackbar seconds={5000} message={snackbar.message} mobile={snackbar.isMobile} />;
};
