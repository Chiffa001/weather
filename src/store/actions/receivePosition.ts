import { Dispatch } from 'react';
import cityService from '../../services/cityService';
import { PositionActions, PositionActionType } from '../../types/coordinates';

const receivePosition = (
  lat: number,
  lon: number,
) => async (dispatch: Dispatch<PositionActionType>) => {
  dispatch({ type: PositionActions.START_RECEIVE_POSITION_ACTION });
  try {
    const { city, country } = await cityService.getData(lat, lon);
    dispatch({
      type: PositionActions.SUCCESS_RECEIVE_POSITION_ACTION,
      payload: {
        lat, lon, city, country,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({
        type: PositionActions.ERROR_RECEIVE_POSITION_ACTION,
        payload: err.message,
      });
    }
  }
};

export default receivePosition;
