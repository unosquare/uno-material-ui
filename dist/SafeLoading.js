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
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (_a) {
    var spacing = _a.spacing;
    return ({
        progress: {
            margin: spacing(2),
        },
        workingModal: {
            alignItems: 'center',
            backgroundColor: '#bdbdbd',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            left: 0,
            opacity: 0.5,
            position: 'absolute',
            top: 0,
            width: '1s00%',
            zIndex: 2000,
        },
    });
});
exports.SafeLoading = function (_a) {
    var isLoading = _a.isLoading;
    if (!isLoading) {
        return React.createElement(React.Fragment, null);
    }
    var classes = useStyles({});
    var _b = React.useState(0), progress = _b[0], setProgress = _b[1];
    var workingInProgress = function (event) { return event.preventDefault(); };
    var tick = function () { return setProgress(function (oldProgress) { return (oldProgress >= 100 ? 0 : oldProgress + 1); }); };
    React.useEffect(function () {
        var timer = setInterval(tick, 20);
        return function () {
            clearInterval(timer);
        };
    }, []);
    return (React.createElement("div", { className: classes.workingModal, onClick: workingInProgress },
        React.createElement(CircularProgress_1.default, { className: classes.progress, value: progress, variant: 'determinate' })));
};
//# sourceMappingURL=SafeLoading.js.map