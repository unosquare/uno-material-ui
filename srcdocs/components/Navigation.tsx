import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Build from '@material-ui/icons/Build';
import Dashboard from '@material-ui/icons/Dashboard';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, NavBar } from '../../src';
import logo from '../static/uno-material-logo.svg';

const useStyles = makeStyles(({ palette }: any) => ({
    button: {
        color: '#fff',
    },
    icon: {
        color: palette.secondary.light,
    },
    link: {
        textDecoration: 'none',
    },
    logo: {
        marginTop: '10px',
        width: '150px',
    },
}));

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <React.Fragment>
            <NavBar title={'uno-material-ui'} />
            <MenuList>
                <Link to='/' className={classes.link}>
                    <ListItem button={true}>
                        <Dashboard className={classes.icon} />
                        <ListItemText primary='Overview' />
                    </ListItem>
                </Link>
                <Link to='/examples' className={classes.link}>
                    <ListItem button={true}>
                        <Build className={classes.icon} />
                        <ListItemText primary='Components' />
                    </ListItem>
                </Link>
            </MenuList>
        </React.Fragment>
    );
};
