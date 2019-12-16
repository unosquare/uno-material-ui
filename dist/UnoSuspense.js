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
var LoadingIcon_1 = require("./LoadingIcon");
exports.UnoSuspense = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Suspense, { fallback: React.createElement(LoadingIcon_1.LoadingIcon, null) }, children));
};
