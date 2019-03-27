var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TextValidator = /** @class */ (function (_super) {
    __extends(TextValidator, _super);
    function TextValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isValid: null,
        };
        return _this;
    }
    TextValidator.prototype.render = function () {
        var _a = this.props, error = _a.error, errorMessages = _a.errorMessages, validators = _a.validators, requiredError = _a.requiredError, helperText = _a.helperText, validatorListener = _a.validatorListener, withRequiredValidator = _a.withRequiredValidator, label = _a.label, id = _a.id, rest = __rest(_a, ["error", "errorMessages", "validators", "requiredError", "helperText", "validatorListener", "withRequiredValidator", "label", "id"]);
        var isValid = this.state.isValid;
        return (<TextField {...rest} id={id} label={label || humanize(id)} error={!isValid || error} helperText={(!isValid && this.getErrorMessage()) || helperText}/>);
    };
    return TextValidator;
}(ValidatorComponent));
export default TextValidator;
