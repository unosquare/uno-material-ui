import CircularProgress from '@material-ui/core/CircularProgress';
import createShallow from '@material-ui/core/test-utils/createShallow';
import * as React from 'react';
import { ButtonWithLoading } from '../src/ButtonWithLoading';

describe('ButtonWithLoading', () => {
    let wrapper;
    let shallow;
    beforeEach(() => {
        jest.resetModules();
        shallow = createShallow({ dive: true });
    });

    test('Should appear the <CircularProgress/> component', () => {
        wrapper = shallow(<ButtonWithLoading isFetching={true}>Save</ButtonWithLoading>).dive();
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });

    test('Should not appear the <CircularProgress/> component', () => {
        wrapper = shallow(<ButtonWithLoading isFetching={false} >Save</ButtonWithLoading>).dive();
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
    });
});
