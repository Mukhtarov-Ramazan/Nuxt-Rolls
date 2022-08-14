<template>
		<!-- Корзина -->
				<div class="card mb-4">
					<div class="card-body">
						<h5 class="card-title">Ваш заказ</h5>
						<div 
							data-cart-empty 
							class="alert alert-secondary" 
							role="alert"
							v-if="carts.length === 0"
							>
								Корзина пуста
						</div>
						<!-- cart-wrapper -->
						<div class="cart-wrapper">

							<!-- Cart item -->
							<card-to-cart
								v-for="(cart, index) in carts"
								:key="cart.id"
								:cart="cart"
								@itemsCurrentDecrement="itemsCurrentDecrement(index)"
								@itemsCurrentIncrement="itemsCurrentIncrement(index)"
							/>
							<!-- // Cart item -->

						</div>
						<!-- // cart-wrapper -->

						<!-- Стоимость заказа -->
						<div class="cart-total" v-if="carts.length">
							<p v-if="totalCost < 900"><span class="h5">Доставка:</span> <span class="delivery-cost">250 ₽</span> </p>
							<p v-if="totalCost >= 900"><span class="h5">Доставка:</span> <span class="delivery-cost free">бесплатно</span> </p>
							<p><span class="h5">Итого:</span> <span class="total-price">{{totalCost}}</span> <span class="rouble">₽</span></p>
						</div>
						<!-- // Стоимость заказа -->

					</div>

					<!-- Оформить заказ -->
					<div id="order-form" class="card-body border-top">
						<h4 class="card-title">Оформить заказ</h4>
						<form>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Ваш номер телефона">
							</div>
							<button type="submit" class="btn btn-primary">Заказать</button>
						</form>
					</div>
					<!-- // Оформить заказ -->

				</div>
				<!-- // Корзина -->
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CardToCart from './CardToCart.vue'
export default {
	components: { CardToCart },
	computed: {
   	...mapGetters({
      	carts: 'cart/CART'
   	}),

		totalCost () {
			let result = []

			if (this.carts.length) {
				for (let item of this.carts) {
					result.push(item.cost * item.itemsCurrent)
				}

				result = result.reduce(function (sum, el) {
					return sum + el
				})

				return result
			} else {
				return 0
			}
		}
	},

	methods: {
		...mapActions({
      	Increment:'cart/ITEMS_CURRENT_INCREMENT',
      	decrement:'cart/ITEMS_CURRENT_DECREMENT',
		}),

		itemsCurrentDecrement (index) {
			this.decrement(index)
		},

		itemsCurrentIncrement (index) {
			this.Increment (index)
		}
	}
}
</script>

<style>


</style>