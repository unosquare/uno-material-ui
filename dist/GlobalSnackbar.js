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
var amber_1 = __importDefault(require("@material-ui/core/colors/amber"));
var blue_1 = __importDefault(require("@material-ui/core/colors/blue"));
var green_1 = __importDefault(require("@material-ui/core/colors/green"));
var red_1 = __importDefault(require("@material-ui/core/colors/red"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
var SnackbarContent_1 = __importDefault(require("@material-ui/core/SnackbarContent"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CheckCircle_1 = __importDefault(require("@material-ui/icons/CheckCircle"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var Error_1 = __importDefault(require("@material-ui/icons/Error"));
var Info_1 = __importDefault(require("@material-ui/icons/Info"));
var Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
var makeStyles_1 = __importDefault(require("@material-ui/styles/makeStyles"));
var React = __importStar(require("react"));
var useStyles = makeStyles_1.default(function (theme) { return ({
    closeIcon: {
        color: '#fff !important',
        fontSize: '20px  !important',
    },
    error: {
        backgroundColor: theme.palette ? theme.palette.error.main + " !important" : red_1.default[600] + " !important",
        display: 'flex !important',
    },
    icon: {
        fontSize: '20px  !important',
        marginRight: '15px  !important',
    },
    iconMobile: {
        fontSize: '34px  !important',
        marginRight: '15px  !important',
    },
    info: {
        backgroundColor: theme.palette ? theme.palette.primary.main + " !important" : blue_1.default[600] + " !important",
        display: 'flex !important',
    },
    success: {
        backgroundColor: green_1.default[600] + " !important",
        display: 'flex !important',
    },
    text: {
        alignItems: 'center',
        color: '#fff !important',
        display: 'inline-flex !important',
        fontSize: '18px !important',
    },
    textMobile: {
        color: '#fff !important',
        display: 'inline-flex !important',
        fontSize: '28px !important',
    },
    warning: {
        backgroundColor: amber_1.default[700] + " !important",
        display: 'flex !important',
    },
}); });
exports.GlobalSnackbar = function (_a) {
    var message = _a.message, _b = _a.seconds, seconds = _b === void 0 ? 2500 : _b, _c = _a.mobile, mobile = _c === void 0 ? false : _c;
    var classes = useStyles();
    var _d = React.useState(false), open = _d[0], setOpen = _d[1];
    var getIcon = function () {
        switch (message.messageType) {
            case 'info': return React.createElement(Info_1.default, { className: getIconStyle() });
            case 'warning': return React.createElement(Warning_1.default, { className: getIconStyle() });
            case 'error': return React.createElement(Error_1.default, { className: getIconStyle() });
            default: return React.createElement(CheckCircle_1.default, { className: getIconStyle() });
        }
    };
    var getStyle = function () {
        switch (message.messageType) {
            case 'info': return classes.info;
            case 'warning': return classes.warning;
            case 'error': return classes.error;
            default: return classes.success;
        }
    };
    var getTextStyle = function () { return (mobile ? classes.textMobile : classes.text); };
    var getIconStyle = function () { return (mobile ? classes.iconMobile : classes.icon); };
    var onClose = function () { return setOpen(false); };
    React.useEffect(function () {
        if (message && message.messageText !== '') {
            setOpen(true);
            setTimeout(function () {
                setOpen(false);
            }, seconds);
        }
    }, [message]);
    var anchorOrigin = {
        horizontal: mobile ? 'center' : 'right',
        vertical: 'bottom',
    };
    return (React.createElement(Snackbar_1.default, { anchorOrigin: anchorOrigin, className: getStyle(), open: open },
        React.createElement(SnackbarContent_1.default, { className: getStyle(), message: React.createElement(Typography_1.default, { className: getTextStyle() },
                " ",
                getIcon(),
                " ",
                message.messageText,
                " "), action: !mobile &&
                React.createElement(IconButton_1.default, { onClick: onClose },
                    React.createElement(Close_1.default, { className: classes.closeIcon })) })));
};
