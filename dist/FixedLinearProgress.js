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
var LinearProgress_1 = __importDefault(require("@material-ui/core/LinearProgress"));
var makeStyles_1 = __importDefault(require("@material-ui/styles/makeStyles"));
var React = __importStar(require("react"));
var useStyles = makeStyles_1.default({
    linearProgress: {
        height: '20px',
        marginTop: '10px',
    },
});
exports.FixedLinearProgress = function (_a) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b;
    var classes = useStyles({});
    return (React.createElement("div", { className: classes.linearProgress }, isLoading &&
        React.createElement(LinearProgress_1.default, null)));
};
//# sourceMappingURL=FixedLinearProgress.js.map