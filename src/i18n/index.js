import Vue from 'vue';
import VueI18Next from '@panter/vue-i18next';
import i18next from 'i18next';
import resources from './locales';
import moment from 'moment';

Vue.use(VueI18Next);

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  parseMissingKeyHandler: function () {
    return 'Invalid i18n Key';
  },
  interpolation: {
    format: function(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        if(value instanceof Date) return moment(value).format(format);
        return value;
    }
  }
});

export default new VueI18Next(i18next);