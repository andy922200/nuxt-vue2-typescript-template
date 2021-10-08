// ~/plugins/persistedState.client.js
import createPersistedState from 'vuex-persistedstate'

export default ({ app, store }:{ app:any, store:any}) => {
    const vuexStoreKey = 'vuex'
    const storedVuexValue = window.localStorage.getItem(vuexStoreKey) || undefined
    createPersistedState({
        key: vuexStoreKey,
        paths: ['selectedLanguage']
    })(store)

    if (!storedVuexValue) {
        window.localStorage.setItem(vuexStoreKey, JSON.stringify(store.state))
    } else {
        app.i18n.locale = JSON.parse(storedVuexValue).selectedLanguage
    }
}
