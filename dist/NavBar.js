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
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var React = __importStar(require("react"));
exports.NavBar = function (props) { return (React.createElement(AppBar_1.default, { position: 'absolute', color: 'primary' },
    React.createElement(Toolbar_1.default, null,
        React.createElement(Grid_1.default, { container: true, direction: 'row', item: true, xs: 12 },
            React.createElement(Grid_1.default, { item: true, xs: 6, container: true, direction: 'row', justify: 'flex-start', alignItems: 'center' },
                React.createElement(Typography_1.default, { color: 'textSecondary', variant: 'h5' }, props.title || 'uno-react')),
            React.createElement(Grid_1.default, { xs: 6, item: true, container: true, direction: 'row', justify: 'flex-end', alignItems: 'center' }, props.children))))); };
