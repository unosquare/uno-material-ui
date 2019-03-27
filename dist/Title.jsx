import Typography from '@material-ui/core/Typography';
import * as React from 'react';
export function Title(_a) {
    var prefix = _a.prefix, suffix = _a.suffix, value = _a.value, titleClass = _a.titleClass;
    var title = "" + (prefix || '') + value + (suffix || '');
    React.useEffect(function () { document.title = title; }, [title]);
    return <Typography variant='h4' className={titleClass}>{value}</Typography>;
}
export function AppTitle(prefix, suffix) {
    return function (_a) {
        var value = _a.value, titleClass = _a.titleClass;
        var props = { prefix: prefix, suffix: suffix, value: value, titleClass: titleClass };
        return <Title {...props}/>;
    };
}
