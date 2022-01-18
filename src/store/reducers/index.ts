import { combineReducers } from 'redux';
import positionReducer from './positionReducer';

const rootReducer = combineReducers({
  position: positionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
