import * as React from 'react';
import { LoadingIcon } from './LoadingIcon';
export var UnoSuspense = function (_a) {
    var children = _a.children;
    return (<React.Suspense fallback={<LoadingIcon />}>
        {children}
    </React.Suspense>);
};
