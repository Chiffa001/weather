import { Dispatch } from 'react';
import apiService from '../../services/wheatherService';
import { WheatherActions, WheatherActionType } from '../../types/wheather';

const fetchWheather = (lat: number, lon: number) => (dispatch: Dispatch<WheatherActionType>) => {
  dispatch({ type: WheatherActions.START_FETCH_WHEATHER_ACTION });
  if (lat !== null && lon !== null) {
    apiService.getData(lat, lon)
      .then((response) => {
        const { current, daily } = response.data;

        dispatch({
          type: WheatherActions.SUCCESS_FETCH_WHEATHER_ACTION,
          payload: { current, daily },
        });
      })
      .catch((err) => {
        dispatch({ type: WheatherActions.ERROR_FETCH_WHEATHER_ACTION, payload: err.message });
      });
  }
};

export default fetchWheather;
