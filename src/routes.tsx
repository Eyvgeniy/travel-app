import { UserModel } from "models/User/User";

const isProduction = process.env.NODE_ENV === "production";

const host = isProduction ? "" : "http://localhost:3000";

export default {
  getCountries: (): string => [host, "countries"].join("/"),
  getCountry: (id: string): string => [host, "countries", id].join("/"),
  signIn: (username: string, password: string): string => [host, "api/user/auth/signin"].join("/"),
  signUp: (username: string, password: string): string => [host, "api/user/auth/signup"].join("/"),
  checkValidity: (token: string): string => [host, "api/user/auth/check-token-validity"].join("/"),
};
