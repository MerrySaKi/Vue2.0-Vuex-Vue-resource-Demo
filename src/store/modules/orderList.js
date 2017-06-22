import Vue from 'vue'

const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
}

const actions = {
  fetchOrderList ({commit, state}) {
    Vue.http.get('/api/getOrderList', state.params)
    .then((res) => {
      commit('updateOrderList', res.data.list)
    }, _ => {
    })
  }
}

const mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
  },
  updataParams (state, {key, val}) {
    state.params[key] = val
    console.log(state.params)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
