import { combineReducers } from 'redux';
import positionReducer from './positionReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  position: positionReducer,
  wheather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
