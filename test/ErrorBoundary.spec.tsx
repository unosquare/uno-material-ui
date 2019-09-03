import createShallow from '@material-ui/core/test-utils/createShallow';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { ErrorBoundary } from '../src/ErrorBoundary';

describe('ErrorBoundary', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<ErrorBoundary />);
        wrapper.setState({ errorInfo: 'An unexpected error...' });
    });

    afterAll(() => {
        wrapper.detach();
    });

    test.skip('Should contain a <Typography />', () => {
        expect(wrapper.find(Typography)).toHaveLength(2);
    });
});
