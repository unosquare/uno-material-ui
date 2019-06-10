import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Build from '@material-ui/icons/Build';
import Dashboard from '@material-ui/icons/Dashboard';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '../../src';

const useStyles = makeStyles(({ palette }: any) => ({
    icon: {
        color: palette.primary.light,
        marginRight: '5px',
    },
    link: {
        textDecoration: 'none',
    },
}));

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <MenuList>
            <Link to='#' className={classes.link}>
                <ListItem button={true}>
                    <Dashboard className={classes.icon} />
                    <ListItemText secondary='Dashboard' />
                </ListItem>
            </Link>
            <Link to='#' className={classes.link}>
                <ListItem button={true}>
                    <Build className={classes.icon} />
                    <ListItemText secondary='Tools' />
                </ListItem>
            </Link>
        </MenuList>
    );
};
