const isProduction = process.env.NODE_ENV === "production";

const host = isProduction ? "" : "http://localhost:3000";

export default {
  getCountries: (lang = "en"): string =>
    [host, `countries?lang=${lang}`].join("/"),
  getCountry: (id: string, lang = "en" as string): string =>
    [host, "countries", `${id}?lang=${lang}`].join("/"),
};
