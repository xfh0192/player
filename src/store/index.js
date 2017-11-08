import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        togglePlayer: false,
        indexName: 'indexContent',
        indexList: [],
        playerList: [],
        playingSong: {}
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
        },
        addToList (state, payload) {
            if (payload) {
                state.playerList.push(payload);
                state.playerList = [...new Set(state.playerList)];
            }
            // console.log(state.playerList)
            // console.log(JSON.stringify(state.playerList))
        },
        play (state, payload) {
            if (payload && payload != state.playingSong) {
                state.playingSong = payload;
            }
            console.log("playingSong change:" + JSON.stringify(payload))
        }
    },
    actions: {
        addAndPlay: function ({commit}, item) {
            if (item) {
                commit("addToList", item);
                // commit("play", item)
                new Promise(function (resolve, reject) {
                    var url = "/music/url?id=" + item.id;
                    return resolve(axios.get(url));
                })
                .then(function (response) {
                    if (response.status == 200 && response.data.data.length) {
                        let musicUrl = response.data.data[0].url;
                        item.musicUrl = musicUrl;
                        commit("play", item);
                    }
                    // console.log(song)
                })
                .catch(function (err) {
                    console.log(err);
                })
            }
        }
    }
})