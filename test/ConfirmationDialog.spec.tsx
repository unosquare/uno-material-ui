import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import createShallow from '@material-ui/core/test-utils/createShallow';
import * as React from 'react';
import { ConfirmationDialog } from '../src/ConfirmationDialog';
import context from './dataSource/__mocks__/TestContextHelper';

describe('ConfirmationDialog', () => {
    let wrapper;
    let shallow;
    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
            <ConfirmationDialog
                contentText="Are you sure?"
                title="Do action"
                onAgreeAction={context.actions.onAgreeAction}
                onClose={context.actions.onDesagreeAction}
                open={true}
            />,
        );
    });

    test('Should contain a <Dialog />', () => {
        expect(wrapper.find(Dialog)).toHaveLength(1);
    });

    test('Should contain a <DialogTitle />', () => {
        expect(wrapper.find(DialogTitle)).toHaveLength(1);
    });

    test('Should contain a <DialogContent />', () => {
        expect(wrapper.find(DialogContent)).toHaveLength(1);
    });

    test('Should contain a <DialogContentText />', () => {
        expect(wrapper.find(DialogContentText)).toHaveLength(1);
    });

    test('Should contain a <DialogActions />', () => {
        expect(wrapper.find(DialogActions)).toHaveLength(1);
    });

    test('Should contain a <Button />', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    test('Test OnAgreeAction', () => {
        const agreeButton = wrapper.find({ color: 'primary' });
        expect(agreeButton).toHaveLength(1);

        agreeButton.simulate('click');
        expect(context.actions.onAgreeAction).toHaveBeenCalled();
    });

    test('Test OnCloseAction', () => {
        const agreeButton = wrapper.find({ color: 'secondary' });
        expect(agreeButton).toHaveLength(1);

        agreeButton.simulate('click');
        expect(context.actions.onDesagreeAction).toHaveBeenCalled();
    });
});
