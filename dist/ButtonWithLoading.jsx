import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
var ButtonWithLoading = function (_a) {
    var _b = _a.isFetching, isFetching = _b === void 0 ? false : _b, _c = _a.text, text = _c === void 0 ? 'Save' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (<div className={className}>
        {isFetching ?
        <CircularProgress />
        :
            <Button type='submit' color='primary'>
                    {text}
                </Button>}
    </div>);
};
export default ButtonWithLoading;
