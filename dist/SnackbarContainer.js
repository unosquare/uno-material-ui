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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var GlobalSnackbar_1 = require("./GlobalSnackbar");
var SnackbarService_1 = require("./SnackbarService");
var SnackbarContainer = function () {
    var _a = React.useState(), snackbar = _a[0], setSnackbar = _a[1];
    React.useEffect(function () {
        SnackbarService_1.snackbarService.subscribe(onUpdate);
    }, []);
    var onUpdate = function () {
        return setSnackbar(__assign({}, SnackbarService_1.snackbarService.getSnackbar()));
    };
    if (!snackbar) {
        return null;
    }
    return (React.createElement(GlobalSnackbar_1.GlobalSnackbar, { seconds: 5000, message: snackbar.message, mobile: snackbar.isMobile }));
};
exports.default = SnackbarContainer;
//# sourceMappingURL=SnackbarContainer.js.map