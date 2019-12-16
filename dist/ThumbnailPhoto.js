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
var Avatar_1 = __importDefault(require("@material-ui/core/Avatar/Avatar"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip/Tooltip"));
var React = __importStar(require("react"));
exports.ThumbnailPhoto = function (_a) {
    var fullName = _a.fullName, imgSrc = _a.imgSrc, placement = _a.placement, rest = __rest(_a, ["fullName", "imgSrc", "placement"]);
    var initials = fullName ? fullName.split(' ').reduce(function (p, s, i) { return (i > 1 ? p : p + s[0]); }, '') : '';
    var _b = React.useState(false), imgLoaded = _b[0], setImgLoad = _b[1];
    React.useEffect(function () {
        var thumbnail = new Image();
        thumbnail.src = imgSrc;
        thumbnail.onload = function () { return setImgLoad(true); };
        return function () { return setImgLoad(false); };
    }, [imgSrc]);
    return (React.createElement(Tooltip_1.default, { title: imgLoaded && fullName ? fullName : '', placement: placement },
        React.createElement(Avatar_1.default, __assign({}, rest, { src: imgLoaded ? imgSrc : '' }), !imgLoaded && initials)));
};
