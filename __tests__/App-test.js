 import React from 'react';
 import App from '../App';
 import MusicPlayer from '../screens/MusicPlayer';
 import { shallow } from 'enzyme';
 
 

 const wrapper = shallow(<MusicPlayer />);

 it('renders correctly', () => {
   expect(wrapper).toMatchSnapshot();
 });

 it('renders correctly', () => {
  const name = wrapper.find("Image");
  expect(name.exists()).toBe(true);
});
