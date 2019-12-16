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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var makeStyles_1 = __importDefault(require("@material-ui/styles/makeStyles"));
var React = __importStar(require("react"));
var uno_react_1 = require("uno-react");
var useStyles = makeStyles_1.default({
    logo: {
        marginRight: 'auto',
        width: '200px',
    },
});
var outerWidth = 600;
var timeout = 1000;
exports.NavBar = function (props) {
    var classes = useStyles({});
    var isMobileView = uno_react_1.useResolutionSwitch(outerWidth, timeout)[0];
    var title = props.title, logo = props.logo, drawerOpen = props.drawerOpen, setDrawerOpen = props.setDrawerOpen;
    var handleDrawerOpen = function (e) {
        e.preventDefault();
        setDrawerOpen(!drawerOpen);
    };
    return (React.createElement(AppBar_1.default, { position: "absolute", color: "primary" },
        React.createElement(Toolbar_1.default, null,
            React.createElement(Grid_1.default, { container: true, direction: "row", item: true, xs: 12 },
                React.createElement(Grid_1.default, { item: true, xs: 6, container: true, direction: "row", justify: "flex-start", alignItems: "center" },
                    isMobileView ? (React.createElement(IconButton_1.default, { color: "inherit", "aria-label": "Open drawer", onClick: handleDrawerOpen },
                        React.createElement(Menu_1.default, null))) : (React.createElement("img", { src: logo, className: classes.logo })),
                    React.createElement(Typography_1.default, { color: "textSecondary", variant: "h5" }, title)),
                React.createElement(Grid_1.default, { xs: 6, item: true, container: true, direction: "row", justify: "flex-end", alignItems: "center" }, props.children)))));
};
