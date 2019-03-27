var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
var styles = function (_a) {
    var palette = _a.palette;
    return createStyles({
        error: {
            backgroundColor: palette.error.dark,
        },
        errorBoundBody: {
            color: 'red',
            fontFamily: 'verdana',
            fontSize: 10,
        },
        errorBoundDetails: {
            fontFamily: 'verdana',
            fontSize: 9,
            whiteSpace: 'pre-wrap',
        },
        errorBoundPaper: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '50px',
            width: '80%',
        },
        errorBoundTitle: {
            fontFamily: 'verdana',
            fontSize: 9,
            whiteSpace: 'pre-wrap',
        },
    });
};
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null,
            errorData: null,
            errorInfo: null,
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.errorInfo) {
            var classes = this.props.classes;
            var errorDesc = this.state.error && this.state.error.toString()
                ? this.state.error.toString()
                : null;
            return (<React.Fragment>
                    <Typography variant='h4'>
                        Something went terribly wrong...
                    </Typography>
                    <Paper className={classes.errorBoundPaper} elevation={8}>
                        <Typography className={classes.errorBoundTitle} variant='subtitle1'>
                            {errorDesc}
                        </Typography>
                        <br />
                        <details className={classes.errorBoundDetails}>
                            <Typography className={classes.errorBoundBody} variant='body2'>
                                {this.state.errorData.componentStack}
                            </Typography>
                        </details>
                    </Paper>
                </React.Fragment>);
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
export { ErrorBoundary };
export default withStyles(styles)(ErrorBoundary);
