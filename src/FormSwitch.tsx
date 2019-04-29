import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as React from 'react';

export const FormSwitch: React.FunctionComponent<any> = ({
    checked,
    className,
    disabled,
    label,
    labelClassName,
    labelPlacement,
    name,
    onChange,
}) => (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    color='primary'
                />
            }
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
