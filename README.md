[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ddb0cdc179c748b3b8f16ddad1194f07)](https://app.codacy.com/app/UnosquareLabs/uno-material-ui?utm_source=github.com&utm_medium=referral&utm_content=unosquare/uno-material-ui&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/unosquare/uno-material-ui.svg?branch=master)](https://travis-ci.org/unosquare/uno-material-ui)

![uno-material-logo](https://user-images.githubusercontent.com/25437790/59792781-91306e80-929a-11e9-9ea8-33c37a67251a.png)

*:star: Please star this project if you find it useful!*

Components and extensions for [Material UI](https://material-ui.com) (React).

Table of contents
=================

  * [💾Installation](#installation)
  * [What's in the library](#whats-in-the-library)
    * [ButtonWithLoading](#buttonwithloading)
    * [ConfirmationDialog](#confirmationdialog)
    * [ErrorBoundary](#errorboundary)
    * [FixedLinearProgress](#fixedlinearprogress)
    * [FormSwitch](#formswitch)
    * [GlobalSnackbar](#globalsnackbar)
    * [LoadingIcon](#loadingicon)
    * [MenuList](#menulist)
    * [NavBar](#navbar)
    * [TextValidator](#textvalidator)
    * [ThumbnailPhoto](#thumbnailphoto)
    * [Title](#title)

### Installation

```bash
> npm i uno-material-ui
```

We are using hooks, so you need to work with React ^16.8.0.

## What's in the library

In this section, we present the different components that are available in the uno-material-io library.

### `ButtonWithLoading`

A button that turns into an animated loading icon when the action is resolving, this only works in Forms.

### Parameters

- `className` **[Object]** The components styles.

- `text` **[string]** Text to be displayed on the button ***defaultValue***: "Save".

- `isFetching` **[boolean]** if true, it displays a loading icon. ***defaultValue***: false.

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
            <ButtonWithLoading isFetching={fetching} />
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
                labelPlacement='start'
                onChange={onChange}
            />
        </ValidatorForm>
    );
};
```

### `GlobalSnackbar`

A global snackbar instance to display messages and errors. You just need to add it to your `Context` and pass it which message you want to display. You will need a Material-UI Theme in order to change the colors. It is available in mobile version too.

### Parameters

- `message` **[Object]** with messageText **[string][2]** and messageType **[string][2]**

- `timeout` **[number]** miliseconds after the snackbar will automatically hide ***defaultValue***: 2500.

- `mobile` **[boolean]** if true, it displays a smaller and center-aligned snackbar. ***defaultValue***: false.

### Example

![GlobalSnackBar](https://user-images.githubusercontent.com/25437790/59793181-87f3d180-929b-11e9-81b7-e57492b903ae.gif)

```javascript
const myContext = () => {
    const [message, handleChange] = useStateForModel({
        messageText: 'Hey!', // Message to display
        messageType: 'info' // success, warning, error or info.
    });

    return (
    <GlobalSnackbar
        message={message}
        seconds={3000}
        mobile={false}
    />
    )
};
    // 'info' type uses Theme's primary main color
    // 'error' type uses Theme's error main color
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

### `SnackbarContextProvider`

A context provider to handle snackbar notifications.

### Parameters
- `messageText` **[string]** A custom message to show on the snackbar component.

- `messageType` **[string]** . ***defaultValue***: `info`.

### Example

```javascript
import * as React from 'react';
// Imports here. . .
import { SnackbarContext } from '../Provider/SnackbarContextProvider';

const LanguageSwitchDialog: React.FunctionComponent<any> = ({ open, onClose }) => {
    // Code here. . .
    const { sendMessage } = React.useContext(SnackbarContext);
    // More code here. . .

    const changeLanguage = (lang: any) => {
        i18n.changeLanguage(lang, (error: any) => {
            if (error) {
                sendMessage(
                    'ErrorBoundaryTitle',
                    'error',
                );
                return;
            }
        });
        actions.changeLanguage(lang);
    };

    return (
        // Rendered component. . .
    );
};

export default LanguageSwitchDialog;
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
import { ValidatorForm } from 'react-form-validator-core';
import { useStateForModel } from 'uno-react';
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
            placement='start'
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
