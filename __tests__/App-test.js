import React from 'react';
import App from '../App';
import MusicPlayer from '../screens/MusicPlayer';
import { shallow } from 'enzyme';

jest.mock('@react-native-community/slider', () => {
  return {
    Slider: jest.fn()
  }
});

jest.mock('react-native-track-player', () => {
  return {
    addEventListener: jest.fn(),
    registerEventHandler: jest.fn(),
    registerPlaybackService: jest.fn(),
    setupPlayer: jest.fn(),
    destroy: jest.fn(),
    updateOptions: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    skip: jest.fn(),
    skipToNext: jest.fn(),
    skipToPrevious: jest.fn(),
    removeUpcomingTracks: jest.fn(),
    // playback commands
    reset: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
    seekTo: jest.fn(),
    setVolume: jest.fn(),
    setRate: jest.fn(),
    // player getters
    getQueue: jest.fn(),
    getTrack: jest.fn(),
    getCurrentTrack: jest.fn(),
    getVolume: jest.fn(),
    getDuration: jest.fn(),
    getPosition: jest.fn(),
    getBufferedPosition: jest.fn(),
    getState: jest.fn(),
    getRate: jest.fn(),

    usePlaybackState: jest.fn(),
    useProgress: () => {
      return { position: 0 }
    },
    useTrackPlayerEvents: jest.fn(),
    Event: jest.fn(),
  };
});

jest.mock('./__mocks__/animeted.js');

jest.mock('react-native', () => {

  return {

    StyleSheet: {
      create: () => ({}),
    },


    Dimensions: {
      get: () => {
        return {
          width: 375,
          height: 667
        }
      }
    }
  }

});



const wrapper = shallow(<MusicPlayer />);

it('renders correctly', () => {
  const { debug } = render(wrapper);
  debug();
});