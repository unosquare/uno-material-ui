import * as React from 'react';
import { LoadingIcon } from './LoadingIcon';
export const UnoSuspense = ({ children }) => (React.createElement(React.Suspense, { fallback: React.createElement(LoadingIcon, null) }, children));
