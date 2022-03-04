import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon'); 

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
   Capability: jest.fn(),
   Event: jest.fn(),
   RepeatMode: jest.fn(),
   State: jest.fn(),
   usePlaybackState: jest.fn(),
   useProgress: jest.fn(),
   useTrackPlayerEvents: jest.fn(),
 };
});


Enzyme.configure({ adapter: new Adapter() });