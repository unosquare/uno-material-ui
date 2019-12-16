"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var styled_1 = __importDefault(require("@material-ui/styles/styled"));
exports.LoadingIcon = styled_1.default(CircularProgress_1.default)(function () { return ({
    display: 'block !important',
    margin: 'auto !important',
    marginBottom: '15px !important',
}); });
