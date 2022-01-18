import {
  IWeatherState, WheatherActions, WheatherActionType,
} from '../../types/wheather';

const initialState: IWeatherState = {
  loading: false,
  error: null,
  wheather: null,
};

const wheatherReducer = (state = initialState, action: WheatherActionType): IWeatherState => {
  switch (action.type) {
    case WheatherActions.START_FETCH_WHEATHER_ACTION:
      return {
        ...state, error: null, loading: true, wheather: null,
      };
    case WheatherActions.ERROR_FETCH_WHEATHER_ACTION:
      return {
        ...state, error: action.payload, loading: false, wheather: null,
      };
    case WheatherActions.SUCCESS_FETCH_WHEATHER_ACTION:
      return {
        ...state, error: null, loading: false, wheather: action.payload,
      };
    default:
      return state;
  }
};

export default wheatherReducer;
