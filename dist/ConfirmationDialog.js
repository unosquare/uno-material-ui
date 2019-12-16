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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var React = __importStar(require("react"));
var buttonStyle = {
    marginRight: '5px !important',
};
exports.ConfirmationDialog = function (_a) {
    var contentText = _a.contentText, title = _a.title, onAgreeAction = _a.onAgreeAction, onClose = _a.onClose, open = _a.open, _b = _a.agree, agree = _b === void 0 ? 'Agree' : _b, _c = _a.disagree, disagree = _c === void 0 ? 'Disagree' : _c, _d = _a.textColor, textColor = _d === void 0 ? 'textSecondary' : _d;
    var _e = React.useState(false), disabled = _e[0], setDisabled = _e[1];
    var handleAgree = function (e) {
        setDisabled(true);
        onAgreeAction(e);
    };
    var handleDisagree = function () {
        setDisabled(true);
        onClose();
    };
    if (disabled && !open) {
        setDisabled(false);
    }
    return (React.createElement(Dialog_1.default, { open: open, onClose: onClose },
        React.createElement(DialogTitle_1.default, null, title),
        React.createElement(DialogContent_1.default, null,
            React.createElement(DialogContentText_1.default, null,
                React.createElement(Typography_1.default, { color: textColor }, contentText))),
        React.createElement(DialogActions_1.default, null,
            onClose && (React.createElement(Button_1.default, { onClick: handleDisagree, style: buttonStyle, disabled: disabled, color: "secondary" }, disagree)),
            onAgreeAction && (React.createElement(Button_1.default, { onClick: handleAgree, color: "primary", disabled: disabled, autoFocus: true, variant: "contained" }, agree)))));
};
