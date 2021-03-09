const isProduction = process.env.NODE_ENV === "production";

const host = isProduction ? "" : "http://localhost:3000";

export default {
  getCountries: (): string => [host, "countries"].join("/"),
  getCountrie: (id: string): string => [host, "countries", id].join("/"),
};
