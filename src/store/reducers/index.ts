import { combineReducers } from 'redux';
import positionReducer from './positionReducer';
import wheatherReducer from './wheatherReducer';

const rootReducer = combineReducers({
  position: positionReducer,
  wheather: wheatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
