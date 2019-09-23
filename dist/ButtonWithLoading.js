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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var React = __importStar(require("react"));
exports.ButtonWithLoading = function (_a) {
    var _b = _a.isFetching, isFetching = _b === void 0 ? false : _b, _c = _a.text, text = _c === void 0 ? 'Save' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (React.createElement("div", { className: className }, isFetching ?
        React.createElement(CircularProgress_1.default, null)
        :
            (React.createElement(Button_1.default, { type: 'submit', color: 'primary' }, text))));
};
//# sourceMappingURL=ButtonWithLoading.js.map