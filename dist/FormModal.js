"use strict";
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
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var React = __importStar(require("react"));
var uno_react_1 = require("uno-react");
var useDialogStyles = makeStyles_1.default({
    root: { overflowY: 'visible' },
});
exports.FormModal = function (props) {
    var actions = props.actions, children = props.children, onClose = props.onClose, onSubmit = props.onSubmit, open = props.open, title = props.title, dialogProps = __rest(props, ["actions", "children", "onClose", "onSubmit", "open", "title"]);
    var classes = useDialogStyles({});
    return (React.createElement(Dialog_1.default, __assign({ onClose: onClose, onExit: onClose, open: open, PaperProps: { component: uno_react_1.ValidatorForm, onSubmit: onSubmit, classes: classes } }, dialogProps),
        React.createElement(DialogTitle_1.default, null, title),
        React.createElement(DialogContent_1.default, { style: { overflowY: 'visible' } }, children),
        actions && React.createElement(DialogActions_1.default, null, actions)));
};
//# sourceMappingURL=FormModal.js.map