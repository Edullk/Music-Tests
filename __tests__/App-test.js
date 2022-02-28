 import 'react-native';
 import React from 'react';
 import App from '../App';
 import { shallow } from 'enzyme';

 jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
 
 it('renders correctly', () => {
   const wrapper = shallow(<App />);
   expect(wrapper).toMatchSnapshot();
 });
