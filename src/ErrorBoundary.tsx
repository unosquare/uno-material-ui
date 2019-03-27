import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = ({ palette }: any) => createStyles({
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

export class ErrorBoundary extends React.Component<WithStyles<typeof styles>> {
    state = {
        error: null,
        errorData: null,
        errorInfo: null,
    };

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            const { classes } = this.props;

            const errorDesc = this.state.error && this.state.error.toString()
                ? this.state.error.toString()
                : null;

            return (
                <React.Fragment>
                    <Typography variant='h4'>
                        Something went terribly wrong...
                    </Typography>
                    <Paper
                        className={classes.errorBoundPaper}
                        elevation={8}
                    >
                        <Typography
                            className={classes.errorBoundTitle}
                            variant='subtitle1'
                        >
                            {errorDesc}
                        </Typography>
                        <br />
                        <details
                            className={classes.errorBoundDetails}
                        >
                            <Typography
                                className={classes.errorBoundBody}
                                variant='body2'
                            >
                                {this.state.errorData.componentStack}
                            </Typography>
                        </details>
                    </Paper>
                </React.Fragment>
            );
        }

        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default withStyles(styles)(ErrorBoundary);
