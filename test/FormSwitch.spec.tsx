import FormControlLabel from '@material-ui/core/FormControlLabel';
import createShallow from '@material-ui/core/test-utils/createShallow';
import * as React from 'react';
import { FormSwitch } from '../src/FormSwitch';

describe('FormSwitch', () => {
    let wrapper;

    beforeAll(() => {
        jest.resetModules();
        const shallow = createShallow();
        wrapper = shallow(<FormSwitch checked={true} label={'Test'} name={'Test'} />);
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <FormControlLabel />', () => {
        expect(wrapper.find(FormControlLabel)).toHaveLength(1);
    });
});
