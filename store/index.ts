import {
    GetterTree, ActionTree, MutationTree
} from 'vuex/types'

// vue-i18n start
import {
    Locales
} from '~/plugins/i18n/config/locales'
import {
    defaultLocale
} from '~/plugins/i18n/config'
// vue-i18n end

export const state = () => ({
    selectedLanguage: defaultLocale,
    windowWidth: 0
})
export type RootState = ReturnType <typeof state>

export const getters: GetterTree<RootState, RootState> = {
    selectedLanguage: state => state.selectedLanguage,
    windowWidth: state => state.windowWidth
}

export const mutations: MutationTree<RootState> = {
    setLanguage (state, payload: Locales) {
        state.selectedLanguage = payload
    },
    setWindowWidth (state, value: number) {
        state.windowWidth = value
    }
}

export const actions: ActionTree<RootState, RootState> = {
    selectNewDefaultLanguage ({ getters, commit }, lang: Locales) {
        const { selectedLanguage }: { selectedLanguage: Locales } = getters
        if (lang !== selectedLanguage) {
            commit('setLanguage', lang)
        }
    }
}
