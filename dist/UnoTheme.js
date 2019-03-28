"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createMuiTheme_1 = __importDefault(require("@material-ui/core/styles/createMuiTheme"));
exports.UnoTheme = createMuiTheme_1.default({
    palette: {
        error: {
            main: '#f44336',
        },
        primary: {
            main: '#304FF3',
        },
        secondary: {
            main: '#5c5b5b',
        },
        text: {
            primary: '#191919',
            secondary: '#000',
        },
    },
    typography: {
        useNextVariants: true,
    },
    zIndex: {
        appBar: 1201,
    },
});
