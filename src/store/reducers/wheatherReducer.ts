import {
  IWeatherState, WheatherActions, WheatherActionType,
} from '../../types/wheather';

const initialState: IWeatherState = {
  loading: false,
  error: null,
  current: null,
  daily: null,
};

const wheatherReducer = (state = initialState, action: WheatherActionType): IWeatherState => {
  switch (action.type) {
    case WheatherActions.START_FETCH_WHEATHER_ACTION:
      return {
        ...state, error: null, loading: true, current: null, daily: null,
      };
    case WheatherActions.ERROR_FETCH_WHEATHER_ACTION:
      return {
        ...state, error: action.payload, loading: false, current: null, daily: null,
      };
    case WheatherActions.SUCCESS_FETCH_WHEATHER_ACTION:
      return {
        ...state,
        error: null,
        loading: false,
        current: action.payload.current,
        daily: action.payload.daily,
      };
    default:
      return state;
  }
};

export default wheatherReducer;
