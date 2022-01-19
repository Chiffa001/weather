import { Dispatch } from 'react';
import cityService from '../../services/cityService';
import { PositionActions, PositionActionType } from '../../types/coordinates';

const receivePosition = () => (dispatch: Dispatch<PositionActionType>) => {
  dispatch({ type: PositionActions.START_RECEIVE_POSITION_ACTION });
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude: lat, longitude: lon } = position.coords;
    cityService.getData(lat, lon)
      .then(({ city, country }) => {
        dispatch({
          type: PositionActions.SUCCESS_RECEIVE_POSITION_ACTION,
          payload: {
            lat, lon, city, country,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: PositionActions.ERROR_RECEIVE_POSITION_ACTION,
          payload: err.message,
        });
      });
  }, (err) => {
    dispatch({
      type: PositionActions.ERROR_RECEIVE_POSITION_ACTION,
      payload: err.message,
    });
  });
};

export default receivePosition;
