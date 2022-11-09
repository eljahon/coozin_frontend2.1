import en from './en.json';
import ru from './ru.json';
import uz from './uz.json';
export const i18n = {
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en'
    },
    {
      code: 'ru',
      name: 'Русский',
      iso: 'ru'
    },
    {
      code: 'uz',
      name: 'Ўзбекча',
      iso: 'uz'
    }
  ],
  defaultLocale: "uz",
  vueI18n: {
    fallbackLocale: "en",
    messages: {en,ru,uz},
  },
};
