import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
const ButtonWithLoading = ({ isFetching = false, text = 'Save', className = '' }) => (React.createElement("div", { className: className }, isFetching ?
    React.createElement(CircularProgress, null)
    :
        React.createElement(Button, { type: 'submit', color: 'primary' }, text)));
export default ButtonWithLoading;
