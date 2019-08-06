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
            <ButtonWithLoading isFetching={fetching} />
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
                labelPlacement='start'
                onChange={onChange}
            />
        </ValidatorForm>
    );
};`;

const GlobalSnackBar = `
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { GlobalSnackbar } from 'uno-material-ui';

const useStyles = makeStyles({
    error: {
        color: 'red',
        marginBottom: '40px',
    },
    info: {
        color: 'blue',
        marginBottom: '40px',
        marginRight: '20%',
    },
    success: {
        color: 'green',
        marginTop: '30px',
    },
    warning: {
        color: 'orange',
        marginBottom: '40px',
        marginRight: '20%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);
    const [message, setMessage] = React.useState({});
    const [mobile, setMobile] = React.useState(false);
    const info = { messageText: 'Hey! Check this snackbar', messageType: 'info' };
    const warning = { messageText: 'Hey! Be careful', messageType: 'warning' };
    const error = { messageText: 'Hey! This is broken', messageType: 'error' };
    const success = { messageText: 'Hey! Everything is awesome', messageType: 'success' };

    const onOpenInfo = () => {
        setMobile(false);
        setMessage(info);
    };
    const onOpenWarning = () => {
        setMobile(false);
        setMessage(warning);
    };
    const onOpenError = () => {
        setMobile(false);
        setMessage(error);
    };
    const onOpenSuccess = () => {
        setMobile(true);
        setMessage(success);
    };

    return (
        <React.Fragment>
            <Button className={classes.info} onClick={onOpenInfo}>Open Info Snackbar</Button>
            <Button className={classes.warning}onClick={onOpenWarning}>Open Warning Snackbar</Button>
            <Button className={classes.error}onClick={onOpenError}>Open Error Snackbar</Button>
            <Typography>It is also available in mobile version</Typography>
            <Button className={classes.success}onClick={onOpenSuccess}>Open Success Mobile Snackbar</Button>
            {message.messageText && <GlobalSnackbar message={message} seconds={5000} mobile={mobile} />}
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
            placement='start'
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
    ButtonWithLoading, ConfirmationDialog, ErrorBoundary, FixedLinearProgress, FormSwitch,
    GlobalSnackBar, LoadingIcon, MenuList, NavBar, TextValidator, ThumbnailPhoto, Title,
};

export default Codes;
