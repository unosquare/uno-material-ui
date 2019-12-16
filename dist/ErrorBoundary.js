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
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var React = __importStar(require("react"));
var styles = function () {
    return createStyles_1.default({
        errorBoundBody: {
            color: 'red',
            marginBottom: '30px',
        },
    });
};
var ErrorBoundaryComponent = /** @class */ (function (_super) {
    __extends(ErrorBoundaryComponent, _super);
    function ErrorBoundaryComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null,
            errorData: null,
            errorInfo: null,
        };
        return _this;
    }
    ErrorBoundaryComponent.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    };
    ErrorBoundaryComponent.prototype.render = function () {
        if (this.state.errorInfo) {
            var classes = this.props.classes;
            return (React.createElement(React.Fragment, null,
                React.createElement(Typography_1.default, { className: classes.errorBoundBody, variant: "h4" }, "Something went terribly wrong..."),
                React.createElement(Typography_1.default, { variant: "h5" }, "Please, refresh the page.")));
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    };
    return ErrorBoundaryComponent;
}(React.Component));
exports.ErrorBoundary = withStyles_1.default(styles)(ErrorBoundaryComponent);
