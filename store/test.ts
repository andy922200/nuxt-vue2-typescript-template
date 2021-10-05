import {
    GetterTree, ActionTree, MutationTree
} from 'vuex/types'
import {
    cloneDeep
} from 'lodash-es'

export const moduleName = 'test'
export const stateTemplate = {
    inTestVar: 'inTestVar'
}

export const state = () => (cloneDeep(stateTemplate))
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
