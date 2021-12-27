import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

const TOKEN = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    // 一个对象,存储当前登录用户信息(token等数据)
    user: getItem(TOKEN)
    // user: JSON.parse(window.localStorage.getItem('TOUTIAO_USER'))
    // user: null
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为了防止刷新丢失,我们需要把数据备份到本地存储
      setItem(TOKEN, state.user)
      // window.localStorage.setItem('TOUTIAO_USER', JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
