import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles(() => ({
    grid: {
        alignContent: 'center',
        justifyContent: 'center',
        left: '50%',
        padding: 20,
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

export const CentralCard = (props: any) => {
    const classes = useStyles();

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
                {props.children}
            </Card>
        </Grid>
    );
};

