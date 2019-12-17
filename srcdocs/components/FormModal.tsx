import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import * as React from 'react';
import { ValidatorForm } from 'uno-react';
import { FormModal, TextValidator } from '../../src/';

const initialState = { Comments: '' };

export default () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState(initialState);

    const onCancel = () => setOpen(false);
    const onOpen = () => setOpen(true);

    const changeNotes = (event: any) => setState({
        ...state,
        Comments: event.target.value,
    });

    const handleSubmit = () => {
        alert(`Hi, this is the comment: ${state.Comments}`);
        onCancel();
    };

    const challengePassword = (password: string) => password.length > 3;
    ValidatorForm.addValidationRule('passwordChallenging', (value: string) => challengePassword(value));

    const Actions: React.FunctionComponent = () => (
        <Grid
            alignItems='center'
            container={true}
            direction='row'
            justify='space-between'
        >
            <Grid
                item={true}
            >
                <Button
                    color='default'
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </Grid>
            <Grid
                item={true}
            >
                <Button
                    color='primary'
                    startIcon={<SaveIcon />}
                    type='submit'
                    variant='contained'
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );

    return (
        <React.Fragment>
            <Button onClick={onOpen}>Open Dialog</Button>
            <FormModal
                actions={<Actions />}
                onClose={onCancel}
                onSubmit={handleSubmit}
                open={open}
                validatorForm={ValidatorForm}
                maxWidth='md'
                fullWidth={true}
                title='Form Modal'
            >
                <TextValidator
                    fullWidth={true}
                    label='Notes'
                    multiline={true}
                    variant='outlined'
                    value={state.Comments}
                    onChange={changeNotes}
                    validators={['required', 'passwordChallenging']}
                    rows={4}
                />
            </FormModal>
        </React.Fragment>
    );
};
