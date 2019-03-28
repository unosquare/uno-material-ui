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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var React = __importStar(require("react"));
function Title(_a) {
    var prefix = _a.prefix, suffix = _a.suffix, value = _a.value, titleClass = _a.titleClass;
    var title = "" + (prefix || '') + value + (suffix || '');
    React.useEffect(function () { document.title = title; }, [title]);
    return React.createElement(Typography_1.default, { variant: 'h4', className: titleClass }, value);
}
exports.Title = Title;
function AppTitle(prefix, suffix) {
    return function (_a) {
        var value = _a.value, titleClass = _a.titleClass;
        var props = { prefix: prefix, suffix: suffix, value: value, titleClass: titleClass };
        return React.createElement(Title, __assign({}, props));
    };
}
exports.AppTitle = AppTitle;
