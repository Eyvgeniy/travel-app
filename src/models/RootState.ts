import { CountryModel, CountryShortModel } from "./Country/Country";
import { UserModel } from "./User/User";

export interface CountriesState {
    actualId: null | string,
    list: Array<CountryShortModel>,
    currentCountry?: CountryModel,
}

export interface UserState {
    currentUser: UserModel | null
}

export interface RootState {
    countries: CountriesState
}