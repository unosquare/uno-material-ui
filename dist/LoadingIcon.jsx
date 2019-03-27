import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@material-ui/styles/styled';
export var LoadingIcon = styled(CircularProgress)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.primary.main,
        display: 'block !important',
        margin: 'auto !important',
        marginBottom: '15px !important',
    });
});
