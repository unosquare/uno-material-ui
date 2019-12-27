import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = (): any =>
    createStyles({
        errorBoundBody: {
            color: 'red',
            marginBottom: '30px',
        },
    });

class ErrorBoundaryComponent extends React.Component<WithStyles<typeof styles>> {
    public state = {
        error: null,
        errorData: null,
        errorInfo: null,
    };

    public componentDidCatch(error: any, errorInfo: any): void {
        this.setState({
            error,
            errorInfo,
        });
    }

    public render() {
        if (this.state.errorInfo) {
            const { classes } = this.props;

            return (
                <React.Fragment>
                    <Typography className={classes.errorBoundBody} variant="h4">
                        Something went terribly wrong...
                    </Typography>
                    <Typography variant="h5">Please, refresh the page.</Typography>
                </React.Fragment>
            );
        }

        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export const ErrorBoundary = withStyles(styles)(ErrorBoundaryComponent);
