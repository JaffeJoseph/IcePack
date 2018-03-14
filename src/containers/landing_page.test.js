import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LandingPage from "./landing_page";

describe('LandingPage', () => {
    describe('Shallow Render', () => {
        it('selectable with the class landing-page', () => {
            expect(shallow(<LandingPage />).is('.landing-page')).toBe(true);
        });
    });

    describe("Full Mount", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(<LandingPage />);
        });

        it('should contain a <button> tag', () => {
            expect(wrapper.find('button').exists()).toEqual(true);
        });
    });
});
