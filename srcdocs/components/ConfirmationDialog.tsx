import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ConfirmationDialog } from '../../src/';

export default () => {
    const [open, setOpen] = React.useState(false);

    const onCancel = () => setOpen(false);
    const onOpen = () => setOpen(true);

    return (
        <React.Fragment>
            <Button onClick={onOpen}>Open Dialog</Button>
            <ConfirmationDialog
                onClose={onCancel}
                open={open}
                title={'Confirmation Dialog'}
                contentText={'Are you sure?'}
                onAgreeAction={onCancel}
            />
        </React.Fragment>
    );
};
