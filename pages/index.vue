<template>
  <div>
    <navbar/>

    <main class="container mb-5">
      <div class="row">
			<div class="col-md-8">
				<div class="row">

					<!-- Ролл -->
					<card 
          v-for="roll in rolls" 
          :key="roll.id"
          :roll="roll"
          @addToCart="addToCart"
          />
					<!-- // Ролл -->

				</div>
			</div>
			<div class="col-md-4">

        <cart/>

			</div>
		</div>
    </main>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Cart from '../components/Cart.vue'
import Navbar from '../components/Navbar.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
  components: { Navbar, Cart, Card },
  name: 'IndexPage',
  data () {
    return{
      rolls: [
      {
        id: 1,
        img: 'california-hit.jpg',
        name: 'Филадельфия хит ролл',
        weight: '180г.',
        cost: 300,
        itemsCurrent: 1
      },

      {
        id: 2,
        img: 'california-tempura.jpg',
        name: 'Калифорния темпура',
        weight: '205г.',
        cost: 250,
        itemsCurrent: 1
      },

      {
        id: 3,
        img: 'philadelphia.jpg',
        name: 'Запеченый ролл «Калифорния»',
        weight: '182г.',
        cost: 230,
        itemsCurrent: 1
      },

      {
        id: 4,
        img: 'zapech-california.jpg',
        name: 'Филадельфия',
        weight: '230г.',
        cost: 320,
        itemsCurrent: 1
      }
    ]
    }
  },

  computed: {
    ...mapGetters({
      CART: 'cart/CART'
  })

  },

  methods: {
    ...mapActions({
      ADD_TO_CART:'cart/ADD_TO_CART'
  }),

    addToCart (roll) {
      this.ADD_TO_CART(roll)

      
    }
  }
}
</script>
