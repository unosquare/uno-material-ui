[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ddb0cdc179c748b3b8f16ddad1194f07)](https://app.codacy.com/app/UnosquareLabs/uno-material-ui?utm_source=github.com&utm_medium=referral&utm_content=unosquare/uno-material-ui&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/unosquare/uno-material-ui.svg?branch=master)](https://travis-ci.org/unosquare/uno-material-ui)

# uno-material-ui

Components and extensions for [Material UI](https://material-ui.com) (React).

Table of contents
=================

  * [💾Installation](#installation)
  * [What's in the library](#whats-in-the-library)
    * [ErrorBoundary](#errorboundary)
    * [GlobalSnackbar](#globalsnackbar)

### Installation

```bash
> npm i uno-material-ui
```

We are using hooks, so you need to work with React ^16.8.0.

## What's in the library

In this section, we present the different components that are available in the uno-material-io library.

### `ErrorBoundary`

Sample Error Boundary class from [React Documentation](https://reactjs.org/docs/error-boundaries.html)

### `GlobalSnackbar`

A global snackbar instance to display messages and errors. You just need to add it to your `Context` and pass it which message you want to display. You will need a Material-UI Theme in order to change the colors. It is available in mobile version too.

### Parameters

- `message` **[Object][3]** with messageText **[string][2]** and messageType **[string][2]**

- `timeout` **[number][5]** miliseconds after the snackbar will automatically hide ***defaultValue***: 2500.

- `mobile` **[boolean][4]** if true, it displays a smaller and center-aligned snackbar. ***defaultValue***: false.

### Example

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
