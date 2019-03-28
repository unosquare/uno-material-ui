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
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var React = __importStar(require("react"));
var styles = function (_a) {
    var palette = _a.palette;
    return createStyles_1.default({
        error: {
            backgroundColor: palette.error.dark,
        },
        errorBoundBody: {
            color: 'red',
            fontFamily: 'verdana',
            fontSize: 10,
        },
        errorBoundDetails: {
            fontFamily: 'verdana',
            fontSize: 9,
            whiteSpace: 'pre-wrap',
        },
        errorBoundPaper: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '50px',
            width: '80%',
        },
        errorBoundTitle: {
            fontFamily: 'verdana',
            fontSize: 9,
            whiteSpace: 'pre-wrap',
        },
    });
};
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null,
            errorData: null,
            errorInfo: null,
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.errorInfo) {
            var classes = this.props.classes;
            var errorDesc = this.state.error && this.state.error.toString()
                ? this.state.error.toString()
                : null;
            return (React.createElement(React.Fragment, null,
                React.createElement(Typography_1.default, { variant: 'h4' }, "Something went terribly wrong..."),
                React.createElement(Paper_1.default, { className: classes.errorBoundPaper, elevation: 8 },
                    React.createElement(Typography_1.default, { className: classes.errorBoundTitle, variant: 'subtitle1' }, errorDesc),
                    React.createElement("br", null),
                    React.createElement("details", { className: classes.errorBoundDetails },
                        React.createElement(Typography_1.default, { className: classes.errorBoundBody, variant: 'body2' }, this.state.errorData.componentStack)))));
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
exports.ErrorBoundary = ErrorBoundary;
exports.default = withStyles_1.default(styles)(ErrorBoundary);
