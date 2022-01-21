export interface IDaytimeTemp {
    day: number;
    morn: number;
    night: number;
}

interface IWeatherNow {
    main: string;
}

export interface ITemp {
    temp: number | null;
    dt: number;
}

interface ICurrentTemp extends ITemp {
    weather: string;
}

interface ICurrent extends ITemp {
    weather: IWeatherNow[];
}

export interface IDay {
    temp: IDaytimeTemp;
    dt: number;
}

export interface IWeather {
    current: ICurrentTemp | null;
    daily: IDay[] | null;
}

export interface IWeatherState {
    loading: boolean;
    error: string | null;
    current: ICurrentTemp | null;
    daily: IDay[] | null;
}

interface IBaseResponse {
    timezone: string;
    daily: IDay[];
}

export interface IWeatherBodyResponse extends IBaseResponse {
    current: ICurrent;
}

export interface IWeatherForState extends IBaseResponse {
    current: ICurrentTemp;
}

export interface IWeatherResponse {
    data: IWeatherBodyResponse;
}

export enum WeatherActions {
    START_FETCH_WEATHER_ACTION = 'START_FETCH_WEATHER_ACTION',
    ERROR_FETCH_WEATHER_ACTION = 'ERROR_FETCH_WEATHER_ACTION',
    SUCCESS_FETCH_WEATHER_ACTION = 'SUCCESS_FETCH_WEATHER_ACTION',
}

interface IStartFetchWheatherAction {
    type: WeatherActions.START_FETCH_WEATHER_ACTION;
}

interface IErrorFetchWheatherAction {
    type: WeatherActions.ERROR_FETCH_WEATHER_ACTION;
    payload: string;
}

interface ISuccessFetchWheatherAction {
    type: WeatherActions.SUCCESS_FETCH_WEATHER_ACTION;
    payload: IWeather;
}

export type WeatherActionType =
    IStartFetchWheatherAction | IErrorFetchWheatherAction | ISuccessFetchWheatherAction;
