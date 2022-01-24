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

export interface IDailyWeather extends IDay {
    weather: string;
}

export interface IWeather {
    current: ICurrentTemp | null;
    daily: IDailyWeather[] | null;
}

export interface IDailyWeatherBody extends IDay {
    weather: IWeatherNow[];
}

export interface IWeatherState {
    loading: boolean;
    error: string | null;
    current: ICurrentTemp | null;
    daily: IDailyWeather[] | null;
}

interface IBaseResponse {
    timezone: string;
    // daily: IDailyWeatherBody[];
}

export interface IWeatherBodyResponse extends IBaseResponse {
    current: ICurrent;
    daily: IDailyWeatherBody[];
}

export interface IWeatherForState extends IBaseResponse {
    current: ICurrentTemp;
    daily: IDailyWeather[];
}

export interface IWeatherResponse {
    data: IWeatherBodyResponse;
}

export enum WeatherActions {
    START_FETCH_WEATHER_ACTION = 'START_FETCH_WEATHER_ACTION',
    ERROR_FETCH_WEATHER_ACTION = 'ERROR_FETCH_WEATHER_ACTION',
    SUCCESS_FETCH_WEATHER_ACTION = 'SUCCESS_FETCH_WEATHER_ACTION',
}

export enum Weathers {
    CLOUDS = 'Clouds',
    RAIN = 'Rain',
    SNOW = 'Snow',
}

interface IStartFetchWeatherAction {
    type: WeatherActions.START_FETCH_WEATHER_ACTION;
}

interface IErrorFetchWeatherAction {
    type: WeatherActions.ERROR_FETCH_WEATHER_ACTION;
    payload: string;
}

interface ISuccessFetchWeatherAction {
    type: WeatherActions.SUCCESS_FETCH_WEATHER_ACTION;
    payload: IWeather;
}

export type WeatherActionType =
    IStartFetchWeatherAction | IErrorFetchWeatherAction | ISuccessFetchWeatherAction;
