import { EventActions, EventActionsType, IEventState } from '../../types/event';

const initialState: IEventState = {
  error: null,
  loading: false,
  events: null,
  dt: null,
};

const eventReducer = (state = initialState, action: EventActionsType): IEventState => {
  switch (action.type) {
    case EventActions.START_FETCH_ACTION_TYPE:
      return {
        ...state, error: null, events: null, loading: true, dt: null,
      };
    case EventActions.ERROR_FETCH_ACTION_TYPE:
      return {
        ...state, error: action.payload, loading: false, events: null, dt: null,
      };
    case EventActions.SUCCESS_FETCH_ACTION_TYPE:
      return {
        ...state, loading: false, error: null, events: action.payload, dt: Date.now(),
      };
    default:
      return state;
  }
};

export default eventReducer;
