import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';
import * as React from 'react';

export default () => (
    <AppBar position='relative' color='primary'>
        <Toolbar>
            <Grid container={true} direction='row' item={true} xs={12}>
                <Grid
                    item={true}
                    xs={6}
                    container={true}
                    direction={'row'}
                    justify={'flex-start'}
                    alignItems={'center'}
                >
                    <Typography color='textSecondary' variant='h5'>
                        Uno-Material-UI
                    </Typography>
                </Grid>
                <Grid
                    xs={6}
                    item={true}
                    container={true}
                    direction={'row'}
                    justify={'flex-end'}
                    alignItems={'center'}
                >
                    <IconButton>
            <Build />
        </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
);
