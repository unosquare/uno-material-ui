import AppBar from '@material-ui/core/AppBar';
import createShallow from '@material-ui/core/test-utils/createShallow';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { NavBar } from '../src/NavBar';

describe('Navbar', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
            <NavBar/>,
        );
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <AppBar />', () => {
        expect(wrapper.find(AppBar)).toHaveLength(1);
    });

    test('Should contain a <Typography />', () => {
        expect(wrapper.find(Typography)).toHaveLength(1);
    });
});
