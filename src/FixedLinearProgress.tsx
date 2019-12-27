import LinearProgress from '@material-ui/core/LinearProgress';
import * as React from 'react';

const linearProgress: React.CSSProperties = {
    height: '20px',
    marginTop: '10px',
};

export interface FixedLinearProgressProps {
    isLoading?: boolean;
}

export const FixedLinearProgress: React.FunctionComponent<FixedLinearProgressProps> = ({ isLoading = false }) => (
    <div style={linearProgress}>{isLoading && <LinearProgress />}</div>
);
