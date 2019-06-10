import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import Highlight from 'react-highlight';
import ButtonWithLoading from '../components/ButtonWithLoading';
import Component from '../components/Component';
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
import UnoTheme from '../components/UnoTheme';

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
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
    },
});

export default (props: any) => {
    const classes = useStyles(props);

    return (
        <Grid container={true} className={classes.container}>
            <Paper className={classes.paper}>
                <Component
                    title='ButtonWithLoading'
                    text='A button with a animated loading icon when the action is resolving.'
                >
                    <ButtonWithLoading />
                </Component>
                <Component
                    title='ConfirmationDialog'
                    text='A customizable dialog to confirm important actions like delete an item.'
                >
                    <ConfirmationDialog />
                </Component>
                <Component
                    title='ErrorBoundary'
                    text='This container catch an error in the children, displaying it.'
                >
                    <ErrorBoundary />
                </Component>
                <Component
                    title='FixedLinearProgress'
                    text='A linear progress component with a height calculated by the spacing of the Theme.'
                >
                    <FixedLinearProgress />
                </Component>
                <Component
                    title='FormSwitch'
                    text='A useful switch component with label, perfect for forms.'
                >
                    <FormSwitch />
                </Component>
                <Component
                    title='GlobalSnackbar'
                    text='A snackbar to display information.'
                >
                    <GlobalSnackbar />
                </Component>
                <Component
                    title='LoadingIcon'
                    text='A center-aligned circular loading animation.'
                >
                    <LoadingIcon />
                </Component>
                <Component
                    title='MenuList'
                    text='A left-side permanent drawer to display navigation options,
                     it leaves an space to add a Navbar.'
                >
                    <MenuList />
                </Component>
                <Component
                    title='Navbar'
                    text='A navbar that uses the primary color in your Theme, you can add a title or logo, and buttons.'
                >
                    <NavBar />
                </Component>
                <Component
                    title='TextValidator'
                    text='An input with validations'
                >
                    <TextValidator />
                </Component>
                <Component
                    title='ThumbnailPhoto'
                    text='An small avatar to display a photo with tooltip'
                >
                    <ThumbnailPhoto />
                </Component>
                <Component
                    title='Title'
                    text='A title, it also changes the document title,
                     so it is displayed on the tab of your web browser.'
                >
                    <Title />
                </Component>
                <Component
                    title='UnoTheme'
                    text='A customized theme.'
                >
                    <UnoTheme />
                </Component>
            </Paper>
        </Grid>
    );
};
