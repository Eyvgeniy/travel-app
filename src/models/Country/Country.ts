export interface CountryShortModel {
    id:	string;
    capital: string;
    description: string;
    name: string;
    imageUrl: string;
    videoUrl: string;
    ISOCode: string;
    capitalLocation: CapitalLocation
}

export interface CapitalLocation {
    coordinates: Array<number>,
    type: "Point",
}

export interface CountryModel extends CountryShortModel{
    places: Array<CountryPlace>
}

export interface CountryPlace{
    description: string;
    name: string;
    imageUrl: string;
}