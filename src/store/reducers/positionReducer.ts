import { IPositionState, PositionActionType, PositionActions } from '../../types/coordinates';

const initialState: IPositionState = {
  loading: false,
  error: null,
  coordinates: { lat: null, lon: null },
};

const positionReducer = (state = initialState, action: PositionActionType): IPositionState => {
  switch (action.type) {
    case PositionActions.START_RECEIVE_POSITION_ACTION:
      return {
        ...state, loading: true, error: null, coordinates: { lat: null, lon: null },
      };
    case PositionActions.ERROR_RECEIVE_POSITION_ACTION:
      return {
        ...state, error: action.payload, loading: false, coordinates: { lat: null, lon: null },
      };
    case PositionActions.SUCCESS_RECEIVE_POSITION_ACTION:
      return {
        ...state, coordinates: action.payload, error: null, loading: false,
      };
    default:
      return state;
  }
};

export default positionReducer;
