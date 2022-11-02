import en from './en.json';
import ru from './ru.json';
import uz from './uz.json';
export const i18n = {
  locales: ["en", "ru", "uz"],
  defaultLocale: "uz",
  vueI18n: {
    fallbackLocale: "en",
    messages: {
      en,
      ru,
      uz,
    },
  },
};
