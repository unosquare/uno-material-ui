import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import { useResolutionSwitch } from 'uno-react';

const useStyles = makeStyles({
    logo: {
        marginRight: 'auto',
        width: '200px',
    },
});

const outerWidth = 600;
const timeout = 1000;

export const NavBar = props => {
    const classes = useStyles({});
    const [isMobileView] = useResolutionSwitch(outerWidth, timeout);
    const { title, logo, drawerOpen, setDrawerOpen } = props;

    const handleDrawerOpen = (e: React.MouseEvent) => {
        e.preventDefault();
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="absolute" color="primary">
            <Toolbar>
                <Grid container={true} direction="row" item={true} xs={12}>
                    <Grid item={true} xs={6} container={true} direction="row" justify="flex-start" alignItems="center">
                        {isMobileView ? (
                            <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <img src={logo} className={classes.logo} />
                        )}
                        <Typography color="textSecondary" variant="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid xs={6} item={true} container={true} direction="row" justify="flex-end" alignItems="center">
                        {props.children}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
