import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    drawer: {
        flexShrink: 0,
    },
    drawerPaper: {
        position: 'relative',
    },
    list: {
        marginTop: '70px',
    },
});

export const MenuList: React.FunctionComponent = props => {
    const classes = useStyles({});

    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
            <List className={classes.list}>{props.children}</List>
        </Drawer>
    );
};
