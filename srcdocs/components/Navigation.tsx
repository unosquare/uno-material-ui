import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { MenuList, NavBar } from '../../src';
import logo from '../static/uno-material-logo-white.svg';

const useStyles = makeStyles(({
    button: {
        color: '#fff',
    },
    link: {
        textDecoration: 'none',
    },
    sub: {
        marginLeft: '20px',
    },
}));

export default () => {
    const classes = useStyles({});

    return (
        <React.Fragment>
            <NavBar logo={logo} />
            <MenuList>
                <Link to='/uno-material-ui/' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText secondary='Overview' />
                    </ListItem>
                </Link>
                <Link to='/uno-material-ui/examples' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText secondary='Components' />
                    </ListItem>
                </Link>
                <HashLink to='/uno-material-ui/examples#ButtonWithLoading' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='ButtonWithLoading' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#ConfirmationDialog' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='ConfirmationDialog' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#ErrorBoundary' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='ErrorBoundary' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#FixedLinearProgress' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='FixedLinearProgress' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#FormSwitch' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='FormSwitch' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#GlobalSnackbar' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='GlobalSnackbar' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#LoadingIcon' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='LoadingIcon' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#MenuList' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='MenuList' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#NavBar' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='NavBar' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#IndeterminatedLoading' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='IndeterminatedLoading' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#ThumbnailPhoto' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='ThumbnailPhoto' />
                    </ListItem>
                </HashLink>
                <HashLink to='/uno-material-ui/examples#Title' className={classes.link}>
                    <ListItem button={true}>
                        <ListItemText className={classes.sub} secondary='Title' />
                    </ListItem>
                </HashLink>
            </MenuList>
        </React.Fragment>
    );
};
