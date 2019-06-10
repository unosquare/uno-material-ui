import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    grid: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export const CentralCard = (props: any) => {
    const classes = useStyles(props);

    return (
        <Grid container={true} className={classes.grid}>
            <Card>
                {props.children}
            </Card>
        </Grid>
    );
};
