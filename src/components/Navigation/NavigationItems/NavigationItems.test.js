import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavItem from './NavItem/NavItem';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />);
});

describe('<NavigationItems />', () => {
  it('should render two <NavItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });
});

it('should render three <NavItem /> elements if authenticated', () => {
  //   wrapper = shallow(<NavigationItems isAuthenticated />);
  wrapper.setProps({ isAuthenticated: true });
  expect(wrapper.find(NavItem)).toHaveLength(3);
});

it('should contains <NavItem /> with log out', () => {
  wrapper.setProps({ isAuthenticated: true });
  expect(wrapper.contains(<NavItem link="/logout">Log Out</NavItem>)).toEqual(true);
});