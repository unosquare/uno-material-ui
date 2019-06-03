import LinearProgress from '@material-ui/core/LinearProgress';
import createShallow from '@material-ui/core/test-utils/createShallow';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as React from 'react';
import { FixedLinearProgress } from '../src/FixedLinearProgress';
import { UnoTheme } from '../src/UnoTheme';

describe('FixedLinearProgress', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow();
    });

    // Enzyme not working well with props and state
    /*test('Should appeard the <FixedLinearProgress/> component', () => {
        wrapper = shallow(
            <ThemeProvider theme={UnoTheme}>
                <FixedLinearProgress isLoading={true} />
            </ThemeProvider>
        );
        expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });*/

    test('Should not appeard the <FixedLinearProgress/> component', () => {
        wrapper = shallow(
            <ThemeProvider theme={UnoTheme}>
                <FixedLinearProgress />
            </ThemeProvider>
        );
        expect(wrapper.find(LinearProgress)).toHaveLength(0);
    });
});
