import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Highlight from 'react-highlight';
import logo from '../static/uno-material-logo.svg';

const useStyles = makeStyles({
    code: {
        fontSize: 15,
    },
    codeTag: {
        background: '#F8F8FF',
        padding: '6px',
    },
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    logo: {
        width: '300px',
    },
    paper: {
        minHeight: '300px',
        padding: 30,
    },
});

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <Grid container={true} className={classes.container}>
            <Paper className={classes.paper}>
                <img src={logo} className={classes.logo} />
                <Divider />
                <Typography
                    paragraph={true}
                    variant='subtitle1'
                    className={classes.content}
                >
                    Uno-Material-UI is a set of custom <a href='https://material-ui.com/'>Material-UI</a> components
                    that extend their funcionalities in specific scenarios.
                </Typography>
                <br />
                <Typography variant='h4'>
                    Installation
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    Uno-Material-UI is available as a <a
                        href='https://www.npmjs.com/package/uno-material-ui'
                        target='_blank'
                    >
                        npm package
                    </a>
                </Typography>
                <Typography variant='h5' paragraph={true}>
                    Dependencies
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    <ul>
                        <li>
                            <a href='https://www.npmjs.com/package/uno-react'>Uno-React - Version: 0.7.0</a>
                        </li>
                        <li>
                            <a href='https://github.com/cssinjs/jss#readme'>JSS - Version: 10.0.0-alpha.9</a>
                        </li>
                        <li>
                            <a href='https://material-ui.com/'>Material-UI - Version: 4.0.1></a>
                        </li>
                        <li>
                            <a href='https://reactjs.org/'>React - Version: 16.8.6</a>
                        </li>
                        <li>
                            <a href='https://github.com/ReactTraining/react-router'>
                                React-Router-Dom - Version: 5.0.1
                            </a>
                        </li>
                    </ul>
                </Typography>
                <Typography variant='h5' paragraph={true}>
                    npm
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    To install and save in your <code className={classes.codeTag}>package.json</code> dependencies, run:
                </Typography>
                <Highlight language='javascript' className={classes.code}>
                    {'npm install tubular-react --save'}
                </Highlight>
                <br />
                <Typography variant='h4'>
                    Related projects
                </Typography>
                <Divider />
                <Typography
                    paragraph={true}
                    variant='subtitle1'
                    className={classes.content}
                >
                    <a href='https://www.npmjs.com/package/uno-react'>Uno-React</a> features hooks and functions
                    that are quite useful to every dev.
                </Typography>
            </Paper>
        </Grid>
    );
};
