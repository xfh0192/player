import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        togglePlayer: false,
        indexName: 'indexContent',
        indexList: []
    },
    mutations: {
        openPlayer (state) {
            state.togglePlayer = true;
        },
        closePlayer (state) {
            state.togglePlayer = false;
        },
        changeIndex (state, payload) {
            state.indexName = payload.target;
        }
    },
    actions: {

    }
})