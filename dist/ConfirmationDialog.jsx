import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
var buttonStyle = {
    marginRight: '5px !important',
};
export var ConfirmationDialog = function (_a) {
    var contentText = _a.contentText, title = _a.title, onAgreeAction = _a.onAgreeAction, onClose = _a.onClose, open = _a.open, _b = _a.agree, agree = _b === void 0 ? 'Agree' : _b, _c = _a.disagree, disagree = _c === void 0 ? 'Disagree' : _c, _d = _a.textColor, textColor = _d === void 0 ? 'textSecondary' : _d;
    var handleAgree = function (e) { return onAgreeAction(e); };
    return (<Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography color={textColor}>{contentText}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onClose &&
        <Button onClick={onClose} style={buttonStyle} color='secondary' variant='contained'>
                        {disagree}
                    </Button>}
                {onAgreeAction &&
        <Button onClick={handleAgree} color='primary' autoFocus={true} variant='contained'>
                        {agree}
                    </Button>}
            </DialogActions>
        </Dialog>);
};
