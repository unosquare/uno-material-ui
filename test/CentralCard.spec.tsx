import Card from '@material-ui/core/Card';
import createShallow from '@material-ui/core/test-utils/createShallow';
import * as React from 'react';
import { CentralCard } from '../src/CentralCard';

describe('CentralCard', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
            <CentralCard/>,
        );
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <Card />', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });
});
