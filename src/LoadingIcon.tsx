import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@material-ui/styles/styled';

export const LoadingIcon = styled(CircularProgress)(() => ({
    display: 'block !important',
    margin: 'auto !important',
    marginBottom: '15px !important',
}));
