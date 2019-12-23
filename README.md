[![codecov](https://codecov.io/gh/unosquare/uno-material-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/unosquare/uno-material-ui)
![Buils status](https://github.com/unosquare/uno-material-ui/workflows/Node.js%20Package/badge.svg)
[![Analytics](https://ga-beacon.appspot.com/UA-8535255-2/unosquare/uno-material-ui/)](https://github.com/igrigorik/ga-beacon)

![uno-material-logo](https://user-images.githubusercontent.com/25437790/59792781-91306e80-929a-11e9-9ea8-33c37a67251a.png)

*:star: Please star this project if you find it useful!*

Components, wrappers and extensions for [Material UI](https://material-ui.com) (React components).

```bash
> npm i uno-material-ui
```

We are using hooks, so you need to work with React ^16.8.0.

## Table of contents

  * [What's in the library](#whats-in-the-library)
    * [ButtonWithLoading](#buttonwithloading)
    * [ConfirmationDialog](#confirmationdialog)
    * [ErrorBoundary](#errorboundary)
    * [FixedLinearProgress](#fixedlinearprogress)
    * [FormModal](#formmodal)
    * [FormSwitch](#formswitch)
    * [IndeterminatedLoading](#indeterminatedloading)
    * [LoadingIcon](#loadingicon)
    * [MenuList](#menulist)
    * [NavBar](#navbar)
    * [SnackbarContainer](#snackbarcontainer)
    * [TextValidator](#textvalidator)
    * [ThumbnailPhoto](#thumbnailphoto)
    * [Title](#title)

## What's in the library

### `ButtonWithLoading`

A button that turns into an animated loading icon when the action is resolving.

### Parameters

- `isFetching` **[boolean]** if true, it displays a loading icon. ***defaultValue***: false.

- `ButtonProps` **[Object]** You can use any prop available on Material-UI\'s button: https://material-ui.com/api/button

### Example

![ButtonWithLoading](https://user-images.githubusercontent.com/25437790/59793157-7a3e4c00-929b-11e9-8631-1b8373489dd5.gif)

```javascript
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
};
```

### `ConfirmationDialog`

A customizable dialog to confirm important actions like delete an item.

### Parameters

- `open` **[boolean]** It controls if the component is displayed or not. ***defaultValue***: false.

- `contextText` **[string]** The text in the dialog.

- `title` **[string]** The dialog title.

- `agree` **[string]** The text in the agree button ***defaultValue***: "Agree".

- `disagree` **[string]** The text in the disagree button ***defaultValue***: "Disagree".

- `textColor` **[string]** The color of the text, it can be: "textSecondary" | "inherit" | "primary" | "secondary" | "textPrimary" | "initial" | "error" ***defaultValue***: "textSecondary".

- `onAgreeAction` **[Function]** The function to call when the agree button is clicked.

- `onClose` **[Function]** The function to call when the cancel button is clicked.

![ConfirmationDialog](https://user-images.githubusercontent.com/25437790/59793168-7e6a6980-929b-11e9-9162-5fc54e3e3558.gif)

### Example

```javascript
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
};
```

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)

### `FixedLinearProgress`

A linear progress component.

### Parameters

- `isLoading` **[boolean]** It controls if the component is displayed or not. ***defaultValue***: false.

### Example

![FixedLinearProgress](https://user-images.githubusercontent.com/25437790/59793174-81fdf080-929b-11e9-9d9e-0aa434993b50.gif)

```javascript
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
};
```

### `FormModal`

A wrapper for your modals with a form logic, just add input fields.

### Parameters

- `actions` **[JSXElement]** JSX Element displayed at the bottom of the dialog.

- `onSubmit` **[Function]** Function called when the form is submitted.

- `title` **[string]** Dialog's title.

- `DialogProps` **[Object]** You can use any prop available on Material-UI\'s dialog: https://material-ui.com/api/dialog/#dialog-api

### Example

```javascript
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
};
```

### `FormSwitch`

A useful switch component with label, perfect for forms.

### Parameters

- `checked` **[boolean]** It controls if the switch is active. ***defaultValue***: false.

- `className` **[Object]** The components styles.

- `disabled` **[boolean]** It controls if the component is disabled. ***defaultValue***: false.

- `label` **[string]** The switch label.

- `labelClassName` **[Object]** The label style.

- `labelPlacement` **[string]** The label position ***defaultValue***: "end".

- `name` **[string]** The component name.

- `onChange` **[Function]** The function to call when the switch changes.

### Example

![FormSwitch](https://user-images.githubusercontent.com/25437790/59793177-85917780-929b-11e9-9401-9320ee7b802a.gif)

```javascript
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
};
```

### `IndeterminatedLoading`

A screen-wide modal that blocks the entire UI to prevent interruption during loading or fetching.

### Parameters

- `isLoading` **[boolean]** If true, the component will block the UI until it become false.

### Example

```javascript
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
};
```

### `LoadingIcon`

A center-aligned circular loading animation.

### Parameters

- `color` **[string]** The color of the icon: "primary" | "secondary" | "inherit" ***defaultValue***: primary.

### Example

![LoadingIcon](https://user-images.githubusercontent.com/25437790/59793188-8a562b80-929b-11e9-988e-102c17789782.gif)

```javascript
import * as React from 'react';
import { LoadingIcon } from 'uno-material-ui';

export default () => (
    <LoadingIcon color='secondary'/>
);
```

### `MenuList`

A left-side permanent drawer to display navigation options, it leaves an space to add a Navbar.

### Example

```javascript
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
};
```

### `NavBar`

A navbar that uses the primary color in your Theme, you can add a title or logo, and buttons.

### Parameters

- `title` **[string]** The navbar title.

### Example

```javascript
import * as React from 'react';
import { NavBar } from 'uno-material-ui;

export default () => (
    <NavBar title={'uno-material-ui'} />
);
```

### `SnackbarContainer`

A global snackbar component implemented using Observer pattern, reducing the load on re-renders. It has to be immediately after your ThemeProvider tag because the snackbar type colors are based on the theme. Just add the container and consume the service at any children on your app.

### Example

![SnackbarContainer](https://user-images.githubusercontent.com/25437790/70462742-2578d280-1a81-11ea-8da7-9cba00644a64.gif)

```javascript
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

const SnackbarDemo = (props: any) => {
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
};

export default SnackbarDemo;

```

### `TextValidator`

An input with validations.

### Parameters

- `errorMessages` **Array of strings** An error message for each validator. ***defaultValue***: [].

- `validators` **Array of Functions** Functions to validate the input. ***defaultValue***: [].

- `helperText` **[string]** Text to explain the input.

- `label` **[string]** The input label.

- `id` **[string]** The input id, if there is not label, the id is the label too.

### Example

```javascript
import Button from '@material-ui/core/Button';
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
}
```

### `ThumbnailPhoto`

An small avatar to display a photo with tooltip.

### Parameters

- `fullName` **[string]** The tooltip content.

- `imgSrc` **[string]** The image path.

- `placement` **[string]** Tooltip position: "left" | "top" | "right" | "bottom", each of them with X-start and X-end variant, like: top-start. ***bottom***: [].

### Example

![ThumbnailPhoto](https://user-images.githubusercontent.com/25437790/59793199-904c0c80-929b-11e9-9c68-a876aadfa0a3.gif)

```javascript
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
);
```

### `Title`

A title, it also changes the document title, so it is displayed on the tab of your web browser.

### Parameters

- `prefix` **[string]** The document title prefix.

- `suffix` **[string]** The document title suffix.

- `value` **[string]** The document title, also the component text.

- `titleClass` **[Object]** The components styles.

### Example

```javascript
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Title } from 'uno-material-ui';

export default () => (
    <Title prefix='Unosquare' suffix='uno-material-ui' value='This is a title' />
);
```
