import Typography from '@material-ui/core/Typography';
import * as React from 'react';
export function Title({ prefix, suffix, value, titleClass }) {
    const title = `${prefix || ''}${value}${suffix || ''}`;
    React.useEffect(() => { document.title = title; }, [title]);
    return React.createElement(Typography, { variant: 'h4', className: titleClass }, value);
}
export function AppTitle(prefix, suffix) {
    return ({ value, titleClass }) => {
        const props = { prefix, suffix, value, titleClass };
        return React.createElement(Title, Object.assign({}, props));
    };
}
