const ButtonWithLoading = `
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { ButtonWithLoading } from 'uno-material-ui';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const submit = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <ValidatorForm onSubmit={submit}>
            <ButtonWithLoading isFetching={fetching} type='submit'>
                Save
            </ButtonWithLoading>
        </ValidatorForm>
    );
};`;

const ConfirmationDialog = `
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ConfirmationDialog } from 'uno-material-ui';

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
};`;

const ErrorBoundary = `
import * as React from 'react';
import { ErrorBoundary } from 'uno-material-ui';

export default () => (
        <ErrorBoundary>
            <p> Here goes the children </p>
        </ErrorBoundary>
);`;

const FixedLinearProgress = `
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { FixedLinearProgress } from 'uno-material-ui';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const onLoading = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <React.Fragment>
            <FixedLinearProgress isLoading={fetching} />
            <Button onClick={onLoading}>Start loading!</Button>
        </React.Fragment>
    );
};`;

const FormModal = `
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import * as React from 'react';
import { FormModal } from 'uno-material-ui';

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
        alert('Hi, this is the comment:' + state.Comments);
        onCancel();
    };

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
                    startIcon={<CancelIcon />}
                    variant='contained'
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
                maxWidth='md'
                fullWidth={true}
                title='Form Modal'
            >
                <TextField
                    fullWidth={true}
                    label='Notes'
                    multiline={true}
                    variant='outlined'
                    value={state.Comments}
                    onChange={changeNotes}
                    rows={4}
                />
            </FormModal>
        </React.Fragment>
    );
};`;

const FormSwitch = `
import * as React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { FormSwitch } from 'uno-material-ui';

export default () => {
    const [value, setValue] = React.useState(false);

    const onChange = () => {
        setValue(!value);
    };

    return (
        <ValidatorForm onSubmit={onChange}>
            <FormSwitch
                checked={value}
                label='Switchable'
                onChange={onChange}
            />
            <FormSwitch
                checked={true}
                disabled={true}
                label='Disabled'
                labelPlacement='bottom-start'
                onChange={onChange}
            />
        </ValidatorForm>
    );
};`;

const SnackbarContainer = `
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as React from 'react';
import { SnackbarContainer, snackbarService, UnoTheme } from 'uno-material-ui';

const useStyles = makeStyles({
    error: {
        color: 'red',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '40px',
    },
    info: {
        color: 'blue',
    },
    success: {
        color: 'green',
    },
    warning: {
        color: 'orange',
    },
});

export default (props: any) => {
    const classes = useStyles(props);
    const info = { messageText: 'Hey! Check this snackbar', messageType: 'info' };
    const warning = { messageText: 'Hey! Be careful', messageType: 'warning' };
    const error = { messageText: 'Hey! This is broken', messageType: 'error' };
    const success = { messageText: 'Hey! Everything is awesome', messageType: 'success' };

    const onOpenInfo = () => {
        snackbarService.showSnackbar(info.messageText, info.messageType);
    };
    const onOpenWarning = () => {
        snackbarService.showSnackbar(warning.messageText, warning.messageType);
    };
    const onOpenError = () => {
        snackbarService.showSnackbar(error.messageText, error.messageType);
    };
    const onOpenSuccess = () => {
        snackbarService.showSnackbar(success.messageText);
    };

    return (
        <ThemeProvider theme={UnoTheme}>
            <SnackbarContainer />
            <div className={classes.flexContainer}>
                <Button className={classes.info} onClick={onOpenInfo}>Open Info Snackbar</Button>
                <Button className={classes.warning} onClick={onOpenWarning}>Open Warning Snackbar</Button>
                <Button className={classes.error} onClick={onOpenError}>Open Error Snackbar</Button>
                <Button className={classes.success} onClick={onOpenSuccess}>Open Success Snackbar</Button>
            </div>
        </RThemeProvider>
    );
};`;

const IndeterminatedLoading = `
import * as React from 'react';
import { IndeterminatedLoading } from 'uno-material-ui';

export default () => {
    const [fetching, setFetching] = React.useState(false);

    const startFetching = () => setFetching(true);

    if (fetching) {
        setTimeout(() => setFetching(false), 4000);
    }

    return (
        <React.Fragment>
            <Button onClick={startFetching} />
            <IndeterminatedLoading isLoading={fetching} />
        </React.Fragment>
    );
};`;

const LoadingIcon = `
import * as React from 'react';
import { LoadingIcon } from 'uno-material-ui';

export default () => (
    <LoadingIcon color='secondary'/>
);`;

const MenuList = `
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Build from '@material-ui/icons/Build';
import Dashboard from '@material-ui/icons/Dashboard';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from 'uno-material-ui';

const useStyles = makeStyles(({ palette }: any) => ({
    icon: {
        color: palette.primary.light,
        marginRight: '5px',
    },
    link: {
        textDecoration: 'none',
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <MenuList>
            <Link to='#' className={classes.link}>
                <ListItem button={true}>
                    <Dashboard className={classes.icon} />
                    <ListItemText secondary='Dashboard' />
                </ListItem>
            </Link>
            <Link to='#' className={classes.link}>
                <ListItem button={true}>
                    <Build className={classes.icon} />
                    <ListItemText secondary='Tools' />
                </ListItem>
            </Link>
        </MenuList>
    );
};`;

const NavBar = `
import * as React from 'react';
import { NavBar } from 'uno-material-ui;

export default () => (
    <NavBar title={'uno-material-ui'} />
);`;

const TextValidator =
    `import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { useStateForModel, ValidatorForm } from 'uno-react';
import { TextValidator } from 'uno-material-ui';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);
    const [data, handleChange] = useStateForModel({ name: '' });

    const sendData = () => handleChange({ name: '' });

    return (
        <ValidatorForm onSubmit={sendData} className={classes.form}>
            <TextValidator
                id='name'
                label='Name'
                name='name'
                onChange={handleChange}
                value={data.name}
                validators={['required']}
                errorMessages={[
                    'This field is required',
                ]}
            />
            <Button type='submit'>Submit</Button>
        </ValidatorForm>
    );
};`;

const ThumbnailPhoto = `
import * as React from 'react';
import { ThumbnailPhoto } from 'uno-material-ui';

export default () => (
    <React.Fragment>
        <ThumbnailPhoto
            fullName='Geovanni Perez'
            imgSrc='https://avatars0.githubusercontent.com/u/1775792?s=400&v=4'
            placement='bottom-start'
        />
    </React.Fragment>
);`;

const Title = `
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Title } from 'uno-material-ui';

export default () => (
    <Title prefix='Unosquare' suffix='uno-material-ui' value='This is a title' />
);`;

const Codes = {
    ButtonWithLoading, ConfirmationDialog, ErrorBoundary, FixedLinearProgress, FormModal, FormSwitch,
    IndeterminatedLoading, LoadingIcon, MenuList, NavBar, SnackbarContainer, TextValidator, ThumbnailPhoto, Title,
};

export default Codes;
