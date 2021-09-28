import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import {
    messages, defaultLocale
} from '../i18n/config/index'

export default ({ app }:{app:any}, inject:any) => {
    app.i18n = new VueI18n({
        messages,
        locale: defaultLocale,
        fallbackLocale: defaultLocale
    })
}
