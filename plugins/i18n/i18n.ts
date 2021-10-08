import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import {
    messages, defaultLocale
} from '../i18n/config/index'

export default ({ app, store }:{app:any, store:any}, inject:any) => {
    app.i18n = new VueI18n({
        messages,
        locale: store.state.selectedLanguage ? store.state.selectedLanguage : defaultLocale,
        fallbackLocale: defaultLocale
    })
}
