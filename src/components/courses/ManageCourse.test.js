import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCourse } from './ManageCourse';

describe('Manage Course', () => {
    it('sets error message when trying to save an empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve();}},
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
        };
        const wrapper = mount(<ManageCourse {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});