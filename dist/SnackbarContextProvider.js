"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var uno_react_1 = require("uno-react");
var GlobalSnackbar_1 = require("./GlobalSnackbar");
exports.SnackbarContext = React.createContext({
    sendMessage: null,
});
var updateComponentByResolution = function (setMobileResolution) { return function () {
    setMobileResolution(window.outerWidth < 1000);
}; };
exports.SnackbarContextProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState({
        messageText: '',
        messageType: 'success',
    }), getMessage = _b[0], setMessage = _b[1];
    var _c = React.useState(false), snackbarMode = _c[0], setSnackbarMode = _c[1];
    var listener = updateComponentByResolution(setSnackbarMode);
    var resizeListener = uno_react_1.debounce(listener, 1500);
    React.useEffect(function () {
        setSnackbarMode(window.outerWidth < 1000);
        window.addEventListener('resize', resizeListener);
        return function () { return window.removeEventListener('resize', resizeListener); };
    }, []);
    var providerValue = React.useState({
        sendMessage: function (text, type) {
            if (type === void 0) { type = 'success'; }
            setMessage({
                messageText: text,
                messageType: type,
            });
        },
    })[0];
    return (React.createElement(exports.SnackbarContext.Provider, { value: providerValue },
        children,
        React.createElement(GlobalSnackbar_1.GlobalSnackbar, { seconds: 5000, message: getMessage, mobile: snackbarMode })));
};
//# sourceMappingURL=SnackbarContextProvider.js.map