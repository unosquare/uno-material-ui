"use strict";
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
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Switch_1 = __importDefault(require("@material-ui/core/Switch"));
var React = __importStar(require("react"));
exports.FormSwitch = function (_a) {
    var checked = _a.checked, className = _a.className, disabled = _a.disabled, label = _a.label, labelClassName = _a.labelClassName, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? 'end' : _b, name = _a.name, onChange = _a.onChange;
    return (React.createElement(FormControlLabel_1.default, { control: React.createElement(Switch_1.default, { checked: checked, color: "primary" }), classes: {
            label: labelClassName,
        }, disabled: disabled, label: label, name: name, className: className, labelPlacement: labelPlacement, onChange: onChange }));
};
