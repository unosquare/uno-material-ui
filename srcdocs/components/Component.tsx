import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Code from '@material-ui/icons/Code';
import Settings from '@material-ui/icons/Settings';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import { useToggle } from 'uno-react';
import ApiTable from '../utils/ApiTable';

const useStyles = makeStyles({
    code: {
        fontSize: 15,
    },
    codeTag: {
        background: '#F8F8FF',
        padding: '6px',
    },
    container: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row'
    },
    divider: {
        marginBottom: '15px',
    },
    icon: {
        marginLeft: 'auto',
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

export default ({ children, title, text, api }: any) => {
    const classes = useStyles();
    const [openApi, setOpenApi] = useToggle(false);

    return (
        <div className={classes.section} id={title}>
            <div className={classes.container}>
                <Typography variant='h4' className={classes.title}>
                    {title}
                </Typography>
                <IconButton className={classes.icon}>
                    <Code />
                </IconButton>
                {api &&
                    <IconButton onClick={setOpenApi}>
                        <Settings />
                    </IconButton>
                }
            </div>
            <Divider className={classes.divider} />
            <Typography variant='subtitle1' paragraph={true}>
                {text}
            </Typography>
            {openApi && <ApiTable data={api} />}
            {...children}
        </div>
    );
};
