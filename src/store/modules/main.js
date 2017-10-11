import api from '../../api/wp'
import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'

const state = {
  posts: [],
  pages: []
}

const actions = {
  async [actionTypes.GET_POSTS] ({ commit, state }) {
    commit(mutationTypes.SET_POSTS, await api.getPosts())
  },
  async [actionTypes.GET_PAGES] ({ commit, state }) {
    commit(mutationTypes.SET_PAGES, await api.getPages())
  }
}

const mutations = {
  [mutationTypes.SET_POSTS] (state, data) {
    state.posts = data
  },
  [mutationTypes.SET_PAGES] (state, data) {
    state.pages = data
  }
}

export default {
  state,
  actions,
  mutations
}
