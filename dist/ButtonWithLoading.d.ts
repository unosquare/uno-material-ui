/// <reference types="react" />
import { ButtonProps } from '@material-ui/core/Button';
export declare type ButtonWithLoadingProps = ButtonProps & {
    isFetching: boolean;
};
export declare const ButtonWithLoading: (props: ButtonWithLoadingProps) => JSX.Element;
