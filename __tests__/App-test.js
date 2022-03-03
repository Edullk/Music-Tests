 import 'react-native';
 import React from 'react';
 import App from '../App';
 import { shallow } from 'enzyme';
 
 it('renders correctly', () => {
   const wrapper = shallow(<App />);
   expect(wrapper).toMatchSnapshot();
 });
