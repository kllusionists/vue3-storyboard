import { createStore, createLogger } from 'vuex'
import modules from './modules/index'
import plugins from './plugins/index'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  strict: debug,
  modules,
  plugins: debug ? [createLogger(), ...plugins] : plugins
})