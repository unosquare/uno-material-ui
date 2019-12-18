import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as React from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface FormSwitchProps extends Omit<FormControlLabelProps, 'control'> {
    labelClassName?: string;
}

export const FormSwitch: React.FunctionComponent<FormSwitchProps> = ({
    checked,
    className = '',
    disabled = false,
    label,
    labelClassName,
    labelPlacement = 'end',
    name,
    onChange = (): void => {
        // do nothing
    },
}: FormSwitchProps) => (
    <FormControlLabel
        control={<Switch checked={checked} color="primary" />}
        classes={{
            label: labelClassName,
        }}
        disabled={disabled}
        label={label}
        name={name}
        className={className}
        labelPlacement={labelPlacement}
        onChange={onChange}
    />
);
