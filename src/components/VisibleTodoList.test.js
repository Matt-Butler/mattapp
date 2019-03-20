import React from 'react';
import { shallow } from 'enzyme';
import VisibleTodoList from './VisibleTodoList';

it('renders without crashing', () => {
  const wrapper = shallow(
    <VisibleTodoList/>
  );
  expect(wrapper).toMatchSnapshot();
});