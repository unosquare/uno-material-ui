import * as React from 'react';
import { GlobalSnackbar } from './GlobalSnackbar';
import { ISnackbar, snackbarService } from './SnackbarService';

const SnackbarContainer: React.FunctionComponent<any> = () => {
    const [snackbar, setSnackbar] = React.useState<ISnackbar>();

    React.useEffect(() => {
        snackbarService.subscribe(onUpdate);
    }, []);

    const onUpdate = () => {
        setSnackbar({ ...snackbarService.getSnackbar() });
    };

    if (!snackbar) {
        return null;
    }

    return (
        <GlobalSnackbar
            seconds={5000}
            message={snackbar.message}
            mobile={snackbar.isMobile}
        />
    );
};

export default SnackbarContainer;
