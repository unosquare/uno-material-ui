import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles(({spacing }: any) => ({
    progress: {
        margin: spacing(2),
    },
    workingModal: {
        alignItems: 'center',
        backgroundColor: '#bdbdbd',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        width: '1s00%',
        zIndex: 2000,
    },
}));

export const IndeterminatedLoading: React.FunctionComponent<any> = ({ isLoading }: any) => {
    if (!isLoading) {
        return <div/>;
    }
    const classes = useStyles({});
    const [progress, setProgress] = React.useState(0);
    const workingInProgress = (event: any) => event.preventDefault();
    const tick = () => setProgress((oldProgress: number) => (oldProgress >= 100 ? 0 : oldProgress + 1));

    React.useEffect(() => {
        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div
            className={classes.workingModal}
            onClick={workingInProgress}
        >
            <CircularProgress
                className={classes.progress}
                value={progress}
                variant='determinate'
            />
        </div>
    );
};
