import { Dispatch } from 'react';
import { PositionActions, PositionActionType } from '../../types/coordinates';

const receivePosition = () => (dispatch: Dispatch<PositionActionType>) => {
  dispatch({ type: PositionActions.START_RECEIVE_POSITION_ACTION });
  navigator.geolocation.getCurrentPosition((position) => {
    dispatch({
      type: PositionActions.SUCCESS_RECEIVE_POSITION_ACTION,
      payload: { lat: position.coords.latitude, lon: position.coords.longitude },
    });
  }, (err) => {
    dispatch({
      type: PositionActions.ERROR_RECEIVE_POSITION_ACTION,
      payload: err.message,
    });
  });
};

export default receivePosition;
