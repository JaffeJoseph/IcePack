import React from 'react';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { shallow, mount, render } from 'enzyme';
import SignIn from './sign_in';

describe('SignIn', () => {
    let store;
    let wrapper;
    let history;

    beforeEach(() => {
        store = createStore(combineReducers({ form: formReducer }));
        wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter ref={(r) => { history=r.history }} initialEntries={['/']}>
                        <SignIn />
                    </MemoryRouter>
                </Provider>);
    });

    it('is selectable by the class sign-in', () => {
        expect(wrapper.find('.sign-in').exists()).toBe(true);
        });
    it('renders a field labeled Username', () => {
        expect(wrapper.find('input.Username').exists()).toBe(true);
    });
    it('renders a input labeled Password', () => {
        expect(wrapper.find('input.Password').exists()).toBe(true);
    });
    it('goes anywhere', () => {
        expect(history).toHaveLength(1);
        wrapper.find('a').first().simulate('click', { button: 0 });
        expect(history).toHaveLength(2);
    });
});
