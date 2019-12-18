/* eslint-disable no-unused-vars */
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { humanize } from 'uno-js';

export class TextValidator extends ValidatorComponent {
    public state = {
        isValid: true,
    };

    public render() {
        const {
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            label,
            id,
            ...rest
        } = this.props;
        const { isValid } = this.state;

        return (
            <TextField
                {...rest}
                id={id}
                label={label || humanize(id)}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}
