import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      search: "Search",
      sights: "Get to know most famous landmarks:",
      emptySearch: "No country found",
      signIn: "Sign In",
      signUp: "Sign Up",
      logIn: "Log in",
      "Enter user name": "Enter user name",
      "Type Password": "Type Password",
      close: "Close",
      submit: "Submut",
      Capital: "Capital",
      Country: "Country",
      user: "User",
      password: "Password",
    },
  },
  fr: {
    translation: {
      search: "Recherches",
      sights: "Apprenez à connaître les monuments les plus célèbres:",
      emptySearch: "Aucun pays trouvé",
      signIn: "S'identifier",
      signUp: "S'inscrire",
      logIn: "S'identifier",
      "Enter user name": "Saisissez votre nom d'utilisateur",
      "Type Password": "Tapez votre mot de passe",
      close: "Fermer",
      submit: "Soumettre",
      Capital: "Capitale",
      Country: "l' État",
      user: "Utilisateu",
      password: "Passe",
    },
  },
  ru: {
    translation: {
      search: "Поиск",
      sights: "Познакомьтесь с самыми известными достопримечательностями:",
      emptySearch: "Не найдено ни одной страны",
      signIn: "Войти",
      signUp: "Регистрация",
      logIn: "Войти",
      "Enter user name": "Введите имя пользователя",
      "Type Password": "Введите пароль",
      close: "Закрыть",
      submit: "Отправить",
      Capital: "Столица",
      Country: "Страна",
      user: "Пользователь",
      password: "Пароль",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
