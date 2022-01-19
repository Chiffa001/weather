export interface IWeather {
    temp: number | null;
}

export interface IWeatherState {
    loading: boolean;
    error: string | null;
    wheather: IWeather | null;
}

export interface IWeatherBodyResponse {
    timezone: string;
    current: IWeather;
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
