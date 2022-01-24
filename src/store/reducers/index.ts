import { combineReducers } from 'redux';
import eventReducer from './eventsReducer';
import positionReducer from './positionReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  position: positionReducer,
  wheather: weatherReducer,
  events: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
