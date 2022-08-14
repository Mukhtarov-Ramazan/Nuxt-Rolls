export const state = () => ({
   cart: []
})

export const mutations = {
   SET_CART(state, roll) {
      if (state.cart.length) {
         let isRollExist = false

         state.cart.map(function (item) {
            if (item.id === roll.id) {
               isRollExist = true
               item.itemsCurrent++
            }
         })

         if (!isRollExist) {
            state.cart.push(roll)
         }
      } else {
         state.cart.push(roll)
      }
   },

   INCREMENT(state, index) {
      state.cart[index].itemsCurrent++
   },

   DECREMENT(state, index) {
      if (state.cart[index].itemsCurrent > 1) {
         state.cart[index].itemsCurrent--
      } else{
         state.cart.splice(index, 1)
      }
   }
}

export const actions = {
   ADD_TO_CART ({commit}, roll) {
      commit ('SET_CART', roll)
   },

   ITEMS_CURRENT_INCREMENT({commit}, index) {
      commit('INCREMENT', index)
   },

   ITEMS_CURRENT_DECREMENT({commit}, index) {
      commit('DECREMENT', index)
   },
}

export const getters = {
   CART (state) {
      return state.cart
   }
}