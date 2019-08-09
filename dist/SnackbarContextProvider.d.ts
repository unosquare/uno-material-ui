import * as React from 'react';
interface ISnackbarContext {
    sendMessage: (text: string, type?: string) => void;
}
export declare const SnackbarContext: React.Context<ISnackbarContext>;
export declare const SnackbarContextProvider: React.FunctionComponent;
export {};
