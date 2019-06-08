import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

/* eslint-disable */
Vue.use(Vuex)

// 상태 'Auth'와 상태 'Board'의 Vuex state를 한곳에서 관리할 수 있도록 정의
const state = {
    auth: { // 상태 'Auth'
        token: null, // 'token'을 null로 초기화
        userId: null // 'userId'를 null로 초기화
    },
    board: { // 상태 'Board'
        lists: [] // 상태 'TaskList'는 빈 배열로 초기화
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})