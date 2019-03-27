import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
const useStyles = makeStyles(() => ({
    grid: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));
const CentralCard = (props) => {
    const classes = useStyles();
    return (React.createElement(Grid, { container: true, className: classes.grid },
        React.createElement(Card, null, props.children)));
};
export default CentralCard;
