import Vue from 'vue';
import VueI18Next from '@panter/vue-i18next';
import i18next from 'i18next';
import resources from './locales';

Vue.use(VueI18Next);

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  parseMissingKeyHandler: function () {
    return 'Invalid i18n Key';
  }
});

export default new VueI18Next(i18next);