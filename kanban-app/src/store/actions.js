import * as types from './mutation-types'
import { Auth, List, Task } from '../api'
/* eslint-enable no-unused-vars */

export default {
    // login: ({ commit }) => {
    //     // TODO:
    //     throw new Error('login action should be implemented')
    login: ({ commit }, autoInfo) => {
        return Auth.login(autoInfo)
            .then(({token, userId}) => {
                commit(types.AUTH_LOGIN, {token, userId})
            })
            .catch(err => { throw err })
    },
    fetchLists: ({ commit }) => {
        // TODO:
        throw new Error('fetchLists action should be implemented')
    },
    addTasks: ({ commit }) => {
        // TODO:
        throw new Error('addTasks action should be implemented')
    },
    updateTasks: ({ commit }) => {
        // TODO:
        throw new Error('updateTasks action should be implemented')
    },
    removeTask: ({ commit }) => {
        // TODO:
        throw new Error('removeTask action should be implemented')
    },
    logout: ({ commit }) => {
        // TODO:
        throw new Error('logout action should be implemented')
    }

}