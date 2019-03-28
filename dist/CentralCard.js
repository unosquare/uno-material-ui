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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var makeStyles_1 = __importDefault(require("@material-ui/styles/makeStyles"));
var React = __importStar(require("react"));
var useStyles = makeStyles_1.default(function () { return ({
    grid: {
        alignContent: 'center',
        justifyContent: 'center',
        left: '50%',
        padding: 20,
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
}); });
var CentralCard = function (props) {
    var classes = useStyles();
    return (React.createElement(Grid_1.default, { container: true, className: classes.grid },
        React.createElement(Card_1.default, null, props.children)));
};
exports.default = CentralCard;
