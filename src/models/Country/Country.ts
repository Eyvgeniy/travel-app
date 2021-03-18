export interface CountryShortModel {
    id:	string;
    capital: string;
    description: string;
    name: string;
    imageUrl: string;
    videoUrl: string;
    ISOCode: string;
    capitalLocation: CapitalLocation;
    currency: string;
    timeZone: string
}

export interface CapitalLocation {
    coordinates: [number, number],
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