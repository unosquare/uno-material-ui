import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';

const useStyles = makeStyles({
    code: {
        fontSize: 15,
    },
    codeTag: {
        background: '#F8F8FF',
        padding: '6px',
    },
    divider: {
        marginBottom: '15px',
    },
    section: {
        marginBottom: '20px',
        paddingTop: '50px',
    },
    title: {
        marginTop: '30px',
        width: '50%',
    },
});

export default ({ children, title, text }: any) => {
    const classes = useStyles();

    return (
        <div className={classes.section} id={title}>
            <Typography variant='h4' className={classes.title}>
                {title}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant='subtitle1' paragraph={true}>
                {text}
            </Typography>
            {...children}
        </div>
    );
};
