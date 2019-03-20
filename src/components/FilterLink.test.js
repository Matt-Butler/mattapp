import React from 'react';
import { shallow } from 'enzyme';
import FilterLink from './FilterLink';

it('renders without crashing', () => {
  const wrapper = shallow(
    <FilterLink/>
  );
  expect(wrapper).toMatchSnapshot();
});