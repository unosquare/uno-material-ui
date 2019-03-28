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
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var makeStyles_1 = __importDefault(require("@material-ui/styles/makeStyles"));
var React = __importStar(require("react"));
var useStyles = makeStyles_1.default(function (theme) { return ({
    drawer: {
        flexShrink: 0,
    },
    drawerPaper: {
        position: 'relative',
    },
    toolbar: theme.mixins.toolbar,
}); });
var MenuList = function (props) {
    var classes = useStyles();
    return (React.createElement(Drawer_1.default, { variant: 'permanent', className: classes.drawer, classes: { paper: classes.drawerPaper } },
        React.createElement("div", { className: classes.toolbar }),
        React.createElement(List_1.default, null, props.children)));
};
exports.default = MenuList;
