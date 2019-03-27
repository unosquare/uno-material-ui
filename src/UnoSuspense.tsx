import * as React from 'react';
import { LoadingIcon } from './LoadingIcon';

export const UnoSuspense = ({ children }) => (
    <React.Suspense fallback={<LoadingIcon />}>
        {children}
    </React.Suspense>
);
