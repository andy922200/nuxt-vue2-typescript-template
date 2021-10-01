import {
    GetterTree, ActionTree, MutationTree
} from 'vuex/types'

export const state = () => ({
    inTestVar: 'inTestVar'
})
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    inTestVar: state => state.inTestVar
}

export const mutations: MutationTree<RootState> = {
    setInTestVar (state, payload: string) {
        state.inTestVar = payload
    }
}

export const actions: ActionTree<RootState, RootState> = {
    triggerInTestVar ({ getters, commit }, payload: string) {
        commit('setInTestVar', payload)
    }
}
