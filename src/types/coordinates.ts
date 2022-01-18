export interface ICoordinate {
    lat: number | null;
    lon: number | null;
}

export interface IPositionState {
    error: null | string;
    loading: boolean;
    coordinates: ICoordinate;
}

export enum PositionActions {
    START_RECEIVE_POSITION_ACTION = 'START_RECEIVE_POSITION_ACTION',
    ERROR_RECEIVE_POSITION_ACTION = 'ERROR_RECEIVE_POSITION_ACTION',
    SUCCESS_RECEIVE_POSITION_ACTION = 'SUCCESS_RECEIVE_POSITION_ACTION'
}

interface ISuccessReceivePosition {
    type: PositionActions.SUCCESS_RECEIVE_POSITION_ACTION;
    payload: ICoordinate;
}

interface IErrorReceivePosition {
    type: PositionActions.ERROR_RECEIVE_POSITION_ACTION;
    payload: string;
}

interface IStartReceivePosition {
    type: PositionActions.START_RECEIVE_POSITION_ACTION;
}

export type PositionActionType =
    IStartReceivePosition | IErrorReceivePosition | ISuccessReceivePosition;
