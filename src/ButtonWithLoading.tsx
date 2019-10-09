import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';

export type ButtonWithLoadingProps = ButtonProps & {
    isFetching: boolean;
};

export const ButtonWithLoading = (props: ButtonWithLoadingProps) => {
    const {
        isFetching,
        children,
        ...other
    } = props;

    return (
        <Button {...other} endIcon={isFetching ? <CircularProgress size={25} /> : null} disabled={isFetching}>
            {children}
        </Button>
    );
};
