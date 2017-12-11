import * as types from './mutation-types'

const mutations = {
    [types.SET_LOADING] (state, payload) {
        state.loading = payload
    },
    [types.SET_ERROR] (state, payload) {
        state.error = payload
    },
    [types.CLEAR_ERROR] (state) {
        state.error = null
    }
}

export default mutations