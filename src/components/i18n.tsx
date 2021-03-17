import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      search: "Search",
      sights: "Get to know the country's most famous landmarks",
      emptySearch: "No country found",
      singIn: "Sign In",
      singUp: "Sign Up",
      logIn: "Log in",
      "Enter user name": "Enter user name",
      "Type Password": "Type Password",
      close: "Close",
      submit: "Submut",
      Capital: "Capital",
      Country: "Country",
    },
  },
  fr: {
    translation: {
      search: "Recherches",
      sights: "Apprenez à connaître les monuments les plus célèbres du pays",
      emptySearch: "Aucun pays trouvé",
      singIn: "S'identifier",
      singUp: "S'inscrire",
      logIn: "S'identifier",
      "Enter user name": "Saisissez votre nom d'utilisateur",
      "Type Password": "Tapez votre mot de passe",
      close: "Fermer",
      submit: "Soumettre",
      Capital: "Capitale",
      Country: "l' État",
    },
  },
  ru: {
    translation: {
      search: "Поиск",
      sights:
        "Познакомьтесь с самыми известными достопримечательностями страны",
      emptySearch: "Не найдено ни одной страны",
      singIn: "Войти",
      singUp: "Регистрация",
      logIn: "Войти",
      "Enter user name": "Введите имя пользователя",
      "Type Password": "Введите пароль",
      close: "Закрыть",
      submit: "Отправить",
      Capital: "Столица",
      Country: "Страна",
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
