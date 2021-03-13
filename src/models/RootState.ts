import { CountryModel, CountryShortModel } from "./Country/Country";

export interface CountriesState {
    actualId: null | string,
    list: Array<CountryShortModel>,
    currentCountry?: CountryModel,
}

export interface RootState {
    countries: CountriesState
}