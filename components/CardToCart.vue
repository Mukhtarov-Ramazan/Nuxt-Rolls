<template>
	<div class="cart-item">
		<div class="cart-item__top">
			<div class="cart-item__img">
				<img :src=" require('../assets/img/roll/' + cart.img) " alt="">
			</div>
			<div class="cart-item__desc">
				<div class="cart-item__title">{{cart.name}}</div>
				<div class="cart-item__weight">6 шт. / {{cart.weight}}</div>

				<!-- cart-item__details -->
				<div class="cart-item__details">

					<div class="items items--small counter-wrapper">
						<div class="items__control" @click="itemsCurrentDecrement">-</div>
						<div class="items__current" data-counter="">{{cart.itemsCurrent}}</div>
						<div class="items__control" @click="itemsCurrentIncrement">+</div>
					</div>

					<div class="price">
						<div class="price__currency">{{cart.cost}} ₽</div>
					</div>

				</div>
				<!-- // cart-item__details -->

			</div>
		</div>
	</div>
</template>

<script>

export default {
   props: ['cart'],

	methods: {

		itemsCurrentIncrement () {
			this.$emit('itemsCurrentIncrement')
		},

		itemsCurrentDecrement () {
			this.$emit('itemsCurrentDecrement')
		},
	}
}
</script>

<style>
.cart-item__title {
	font-family: 'Merriweather', serif;
	font-size: 20px;
   line-height: 1.2;
	font-weight: 700;
	margin-bottom: 5px;
}
.items {
	font-family: 'Merriweather', serif;
	background: #f2ede7;
	border-radius: 8px;
	width: 120px;
	display: flex;
	font-size: 18px;
	height: 30px;
	overflow: hidden;
}
.items__control {
	width: 40px;
	cursor: pointer;
	transition: 0.2s ease-in;
	text-align: center;
}

.items__control:hover {
   background: #eb5a1e;
   color: #FFF;
}

.items__current {
	width: 40px;
}

.items.items--small {
	width: 90px;
	font-size: 16px;
	height: 26px;
	text-align: center;
}

.items.items--small .items__control {
	width: 30px;
}

.items.items--small .items__current {
	width: 30px;
}

.price {
	text-align: left;
}

.price__weight {
	color: #6c757d!important;
	font-size: 80%;
	line-height: 1;
}

.price__currency {
	font-size: 18px;
	font-weight: 600;
	line-height: 1;
}

.btn-outline-warning {
   color: #eb5a1e;
   border-color: #eb5a1e;
}

.btn-outline-warning:hover {
   color: #FFF;
   background-color: #eb5a1e;
   border-color: #eb5a1e;
}

.cart-item__top {
	display: flex;
	align-items: flex-start;
	padding-bottom: 15px;
	border-bottom: 1px solid #dee2e6;
	margin-bottom: 15px;
}

.cart-item__img img {
	max-width: 100px;
	height: auto;
}

.cart-item__desc {
	padding-top: 15px;
	padding-left: 15px;
}

.cart-item__title {
	font-family: 'Merriweather', serif;
	font-size: 16px;
   line-height: 1.2;
	font-weight: 600;
	margin-bottom: 5px;
}
.cart-item__weight {
   color: #6c757d!important;
   font-size: 80%;
   line-height: 1;
   margin-bottom: 15px;
}

.cart-item__details {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.cart-item__details .price__currency {
	font-size: 18px;
	margin-left: 15px;
}

.cart-total {
	font-size: 18px;
	font-weight: 500;
}


.free {
	color: #0EA107;
}

.total-price {
	color: #EB5A1E;
}

.rouble {
	color: #EB5A1E;
}

.none {
	display: none;
}

</style>