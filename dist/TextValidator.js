"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var React = __importStar(require("react"));
var react_form_validator_core_1 = require("react-form-validator-core");
var uno_js_1 = require("uno-js");
var TextValidator = /** @class */ (function (_super) {
    __extends(TextValidator, _super);
    function TextValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isValid: true,
        };
        return _this;
    }
    TextValidator.prototype.render = function () {
        var _a = this.props, error = _a.error, errorMessages = _a.errorMessages, validators = _a.validators, requiredError = _a.requiredError, helperText = _a.helperText, validatorListener = _a.validatorListener, withRequiredValidator = _a.withRequiredValidator, label = _a.label, id = _a.id, rest = __rest(_a, ["error", "errorMessages", "validators", "requiredError", "helperText", "validatorListener", "withRequiredValidator", "label", "id"]);
        var isValid = this.state.isValid;
        return (React.createElement(TextField_1.default, __assign({}, rest, { id: id, label: label || uno_js_1.humanize(id), error: !isValid || error, helperText: (!isValid && this.getErrorMessage()) || helperText })));
    };
    return TextValidator;
}(react_form_validator_core_1.ValidatorComponent));
exports.TextValidator = TextValidator;
