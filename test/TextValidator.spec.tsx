import createShallow from '@material-ui/core/test-utils/createShallow';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import { TextValidator } from '../src/TextValidator';

xdescribe('TextValidator', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
                <TextValidator>
                    <ValidatorComponent />
                </TextValidator>
            );
        wrapper.update();
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <TextField />', () => {
        expect(wrapper.find(TextField)).toHaveLength(1);
    });
});