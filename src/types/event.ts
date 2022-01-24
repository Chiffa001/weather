export interface IEvent {
    id: string;
    start: string;
    end: string;
    summary: string;
}

export interface IEventState {
    loading: boolean;
    error: string | null;
    events: IEvent[] | null;
    dt: number | null;
}

export enum EventActions {
    SUCCESS_FETCH_ACTION_TYPE = 'SUCCESS_FETCH_ACTION_TYPE',
    ERROR_FETCH_ACTION_TYPE = 'ERROR_FETCH_ACTION_TYPE',
    START_FETCH_ACTION_TYPE = 'START_FETCH_ACTION_TYPE',
}

interface ISuccessEventAction {
    type: EventActions.SUCCESS_FETCH_ACTION_TYPE;
    payload: IEvent[] | null;
}

interface IErrorEventAction {
    type: EventActions.ERROR_FETCH_ACTION_TYPE;
    payload: string;
}

interface IStartEventAction {
    type: EventActions.START_FETCH_ACTION_TYPE;
}

export type EventActionsType = ISuccessEventAction | IErrorEventAction | IStartEventAction;
