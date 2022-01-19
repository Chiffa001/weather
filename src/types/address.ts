export interface IAddress {
    country: string;
    city: string;
}

export interface ISuggestions {
    data: IAddress;
}

export interface IResponseBodyAddress {
    suggestions: ISuggestions[];
}

export interface IResponseAddress {
    data: IResponseBodyAddress;
}
