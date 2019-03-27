var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* eslint-disable no-unused-vars */
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { humanize } from 'uno-react';
export default class TextValidator extends ValidatorComponent {
    constructor() {
        super(...arguments);
        this.state = {
            isValid: null,
        };
    }
    render() {
        const _a = this.props, { error, errorMessages, validators, requiredError, helperText, validatorListener, withRequiredValidator, label, id } = _a, rest = __rest(_a, ["error", "errorMessages", "validators", "requiredError", "helperText", "validatorListener", "withRequiredValidator", "label", "id"]);
        const { isValid } = this.state;
        return (React.createElement(TextField, Object.assign({}, rest, { id: id, label: label || humanize(id), error: !isValid || error, helperText: (!isValid && this.getErrorMessage()) || helperText })));
    }
}
