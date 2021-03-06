import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatting: false,
    level: {
      name: 'Forest',
      w: 30,
      h: 12,
      objects: [
        {
          x: 12,
          y: 4
        },
        {
          x: 22,
          y: 5
        },
        {
          x: 10,
          y: 2
        }
      ],
      players: [
        {
          x: 0,
          y: 4
        },
        {
          x: 28,
          y: 11
        },
        {
          x: 15,
          y: 2
        }
      ],
    },
    character: {
      x: 0,
      y: 0
    }
  },
  mutations: {
    updatePos(state, [x, y, direction]) {
      state.character = {
        x,
        y,
        direction
      }
    },
    chatting(state) {
      state.chatting = true
    },
    notChatting(state) {
      state.chatting = false
    },
  },
  actions: {},
})
