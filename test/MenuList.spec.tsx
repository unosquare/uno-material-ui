import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import createShallow from '@material-ui/core/test-utils/createShallow';
import * as React from 'react';
import { MenuList } from '../src/MenuList';

describe('MenuList', () => {
    let wrapper;
    let shallow;

    beforeAll(() => {
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(
            (
                <MenuList>
                    <div />
                </MenuList>
            ),
        );
    });

    afterAll(() => {
        wrapper.detach();
    });

    test('Should contain a <Drawer />', () => {
        expect(wrapper.find(Drawer)).toHaveLength(1);
    });

    test('Should contain a <List />', () => {
        expect(wrapper.find(List)).toHaveLength(1);
    });
});
