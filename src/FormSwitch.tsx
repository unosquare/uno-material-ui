import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as React from 'react';

export interface FormSwitchProps extends FormControlLabelProps {
    labelClassName?: string;
}

export const FormSwitch: React.FunctionComponent<FormSwitchProps> = ({
    checked,
    className,
    disabled,
    label,
    labelClassName,
    labelPlacement = 'end',
    name,
    onChange,
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
