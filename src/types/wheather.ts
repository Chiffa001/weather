export interface IDaytimeTemp {
    day: number;
    morn: number;
    night: number;
}

export interface ITemp {
    temp: number | null;
}

export interface IDay {
    temp: IDaytimeTemp;
    dt: number;
}

export interface IWeather {
    current: ITemp | null;
    daily: IDay[] | null;
}

export interface IWeatherState {
    loading: boolean;
    error: string | null;
    current: ITemp | null;
    daily: IDay[] | null;
}

export interface IWeatherBodyResponse {
    timezone: string;
    current: ITemp;
    daily: IDay[];
}

export interface IWeatherResponse {
    data: IWeatherBodyResponse;
}

export enum WheatherActions {
    START_FETCH_WHEATHER_ACTION = 'START_FETCH_WHEATHER_ACTION',
    ERROR_FETCH_WHEATHER_ACTION = 'ERROR_FETCH_WHEATHER_ACTION',
    SUCCESS_FETCH_WHEATHER_ACTION = 'SUCCESS_FETCH_WHEATHER_ACTION',
}

interface IStartFetchWheatherAction {
    type: WheatherActions.START_FETCH_WHEATHER_ACTION;
}

interface IErrorFetchWheatherAction {
    type: WheatherActions.ERROR_FETCH_WHEATHER_ACTION;
    payload: string;
}

interface ISuccessFetchWheatherAction {
    type: WheatherActions.SUCCESS_FETCH_WHEATHER_ACTION;
    payload: IWeather;
}

export type WheatherActionType =
    IStartFetchWheatherAction | IErrorFetchWheatherAction | ISuccessFetchWheatherAction;
