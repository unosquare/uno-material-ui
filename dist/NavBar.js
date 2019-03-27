import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
const NavBar = (props) => (React.createElement(AppBar, { position: 'absolute', color: 'primary' },
    React.createElement(Toolbar, null,
        React.createElement(Grid, { container: true, direction: 'row', item: true, xs: 12 },
            React.createElement(Grid, { item: true, xs: 6, container: true, direction: 'row', justify: 'flex-start', alignItems: 'center' },
                React.createElement(Typography, { color: 'textSecondary', variant: 'h5' }, props.title || 'uno-react')),
            React.createElement(Grid, { xs: 6, item: true, container: true, direction: 'row', justify: 'flex-end', alignItems: 'center' }, props.children)))));
export default NavBar;
