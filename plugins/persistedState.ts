// ~/plugins/persistedState.js
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import {
    isEmpty, pick, cloneDeep
} from 'lodash-es'
import {
    stateTemplate
} from '~/store/index'
import {
    stateTemplate as stateTemplateTest, moduleName as moduleNameTest
} from '~/store/test'

export default ({ app, store, req }: { app: any, store: any, req:any }) => {
    const vuexStoreKey = 'vuex'
    const storedVuexValue = JSON.parse(Cookies.get(vuexStoreKey) || '{}')
    const storedVuexValueInServer = req
        ? cookie.parse(req.headers.cookie || '{}')
        : {
        }
    const toKeepPathsObjOnIndex = pick(cloneDeep(stateTemplate), ['selectedLanguage'])
    const toKeepPathsObjOnTest = pick(cloneDeep(stateTemplateTest), ['inTestVar'])
    const paths = [
        ...Object.keys(toKeepPathsObjOnIndex),
        ...Object.keys(toKeepPathsObjOnTest).map(d => `${moduleNameTest}.${d}`)
    ]

    createPersistedState({
        key: vuexStoreKey,
        paths,
        storage: {
            getItem: key => JSON.parse(Cookies.get(key) || '{}'),
            setItem: (key, value) => Cookies.set(key, value, {
                expires: 3,
                secure: true
            }),
            removeItem: key => Cookies.remove(key)
        }
    })(store)

    /* Cookies fetch in server side */
    // if (!isEmpty(storedVuexValueInServer)){
    // }

    /* Cookies fetch in client side */
    if (!req) {
        if (isEmpty(storedVuexValue)) {
            const initialObj = {
                ...toKeepPathsObjOnIndex
            } as Record<string, any>
            initialObj[`${moduleNameTest}`] = toKeepPathsObjOnTest
            Cookies.set(vuexStoreKey, JSON.stringify(initialObj))
        } else {
            app.i18n.locale = storedVuexValue.selectedLanguage
        }
    }
}
