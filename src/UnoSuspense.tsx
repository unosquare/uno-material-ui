import * as React from 'react';
import { LoadingIcon } from './LoadingIcon';

export const UnoSuspense: React.FunctionComponent = props => (
    <React.Suspense fallback={<LoadingIcon />}>{props.children}</React.Suspense>
);
