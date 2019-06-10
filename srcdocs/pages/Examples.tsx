import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Highlight from 'react-highlight';
import ButtonWithLoading from '../components/ButtonWithLoading';
import CentralCard from '../components/CentralCard';
import ConfirmationDialog from '../components/ConfirmationDialog';
import ErrorBoundary from '../components/ErrorBoundary';
import FixedLinearProgress from '../components/FixedLinearProgress';
import FormSwitch from '../components/FormSwitch';
import GlobalSnackbar from '../components/GlobalSnackbar';
import LoadingIcon from '../components/LoadingIcon';
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';
import TextValidator from '../components/TextValidator';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import Title from '../components/Title';

const useStyles = makeStyles({
    code: {
        fontSize: 15,
    },
    codeTag: {
        background: '#F8F8FF',
        padding: '6px',
    },
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    logo: {
        width: '300px',
    },
    paper: {
        padding: 30,
        width: '100%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <Grid container={true} className={classes.container}>
            <Paper className={classes.paper}>
                <Typography variant='h4'>
                    ButtonWithLoading
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A button with a animated loading icon when the action is resolving.
                </Typography>
                <ButtonWithLoading />
                <Typography variant='h4'>
                    CentralCard
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A card horizontal aligned in the middle.
                </Typography>
                <CentralCard />
                <Typography variant='h4'>
                    ConfirmationDialog
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A customizable dialog to confirm important actions like delete an item.
                </Typography>
                <ConfirmationDialog />
                <Typography variant='h4'>
                    ErrorBoundary
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    This container catch an error in the children, displaying it.
                </Typography>
                <ErrorBoundary />
                <Typography variant='h4'>
                    FixedLinearProgress
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A linear progress component with a height calculated by the spacing of the Theme.
                </Typography>
                <FixedLinearProgress />
                <Typography variant='h4'>
                    FormSwitch
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A useful switch component with label, perfect for forms.
                </Typography>
                <FormSwitch />
                <Typography variant='h4'>
                    GlobalSnackbar
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A snackbar to display information.
                </Typography>
                <GlobalSnackbar />
                <Typography variant='h4'>
                    LoadingIcon
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A center-aligned circular loading animation.
                </Typography>
                <LoadingIcon />
                <Typography variant='h4'>
                    MenuList
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A left-side permanent drawer to display navigation options, it leaves an space to add a Navbar.
                </Typography>
                <MenuList />
                <Typography variant='h4'>
                    Navbar
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A navbar that uses the primary color in your Theme, you can add a title or logo, and buttons.
                </Typography>
                <NavBar />
                <Typography variant='h4'>
                    TextValidator
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A input with validations
                </Typography>
                <TextValidator />
                <Typography variant='h4'>
                    ThumbnailPhoto
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    An avatar to display a photo
                </Typography>
                <ThumbnailPhoto />
                <Typography variant='h4'>
                    Title
                </Typography>
                <Divider />
                <Typography variant='subtitle1' paragraph={true}>
                    A page's title, it also changes the document title so it's displayed on the tab of your web browser.
                </Typography>
                <Title />
            </Paper>
        </Grid>
    );
};
