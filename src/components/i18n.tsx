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
    },
  },
  fr: {
    translation: {
      search: "Recherches",
      sights: "Apprenez à connaître les monuments les plus célèbres du pays",
      emptySearch: "Aucun pays trouvé",
    },
  },
  ru: {
    translation: {
      search: "Поиск",
      sights:
        "Познакомьтесь с самыми известными достопримечательностями страны",
      emptySearch: "Не найдено ни одной страны",
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
