import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles((theme: any) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    primary: {
        color: theme.palette.primary.main,
        marginRight: '50px',
        marginTop: '30px',
    },
    primaryText: {
        marginRight: '30px',
    },
    secondary: {
        color: theme.palette.secondary.main,
        marginTop: '30px',
    },
}));

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <React.Fragment>
            <div className={classes.container}>
                <Typography className={classes.primaryText} color='textPrimary' variant='h5'>
                    Primary Text Color
                </Typography>
                <Typography color='textSecondary' variant='h5'>Secondary Text Color</Typography>
            </div>
            <div className={classes.container}>
                <Button className={classes.primary}>Primary Color</Button>
                <Button className={classes.secondary}>Secondary Color</Button>
            </div>
        </React.Fragment>
    );
};
