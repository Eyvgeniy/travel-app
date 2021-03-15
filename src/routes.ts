const isProduction = process.env.NODE_ENV === "production";

const host = isProduction ? "" : "http://localhost:3000";

export default {
  getCountries: (lang = "en"): string =>
    [host, `countries?lang=${lang}`].join("/"),
  getCountry: (id: string, lang = "en"): string =>
    [host, "countries", `${id}?lang=${lang}`].join("/"),
  signIn: (username: string, password: string): string => 
    [host, "api/user/auth/signin"].join("/"),
  signUp: (username: string, password: string): string =>
    [host, "api/user/auth/signup"].join("/"),
  checkValidity: (token: string): string => 
    [host, "api/user/auth/check"].join("/"),
};
