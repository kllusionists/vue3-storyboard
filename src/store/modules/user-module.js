import { USER_MUTATION } from '../mutations'

const state = () => ({
  userInfo: {
    name: 'Kuo'
  }
})

const getters = {
  userInfo: (state, getters, rootState) => {
    return state.userInfo
    // return state.items.map(({ id, quantity }) => {
    //   const product = rootState.products.all.find(product => product.id === id)
    //   return {
    //     title: product.title,
    //     price: product.price,
    //     quantity
    //   }
    // })
  }
}

// mutations
const mutations = {}
for (const param in USER_MUTATION) {
  mutations[param] = (state, payload) => {
    state[USER_MUTATION[param]] = payload
  }
}

const actions = {
  // async checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.items]
  //   commit('setCheckoutStatus', null)
  //   // empty cart
  //   commit('setCartItems', { items: [] })
  //   try {
  //     await shop.buyProducts(products)
  //     commit('setCheckoutStatus', 'successful')
  //   } catch (e) {
  //     console.error(e)
  //     commit('setCheckoutStatus', 'failed')
  //     // rollback to the cart saved before sending the request
  //     commit('setCartItems', { items: savedCartItems })
  //   }
  // },

  // addProductToCart ({ state, commit }, product) {
  //   commit('setCheckoutStatus', null)
  //   if (product.inventory > 0) {
  //     const cartItem = state.items.find(item => item.id === product.id)
  //     if (!cartItem) {
  //       commit('pushProductToCart', { id: product.id })
  //     } else {
  //       commit('incrementItemQuantity', cartItem)
  //     }
  //     // remove 1 item from stock
  //     commit('products/decrementProductInventory', { id: product.id }, { root: true })
  //   }
  // }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}