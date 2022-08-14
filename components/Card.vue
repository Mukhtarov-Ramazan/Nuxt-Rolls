<template>
   <div class="col-md-6">
		<div class="card mb-4" data-id="03">
			<img class="product-img" :src=" require('../assets/img/roll/' + roll.img) " alt="">
			<div class="card-body text-center">
				<h4 class="item-title">{{roll.name}}</h4>
				<p><small data-items-in-box class="text-muted">6 шт.</small></p>

				<div class="details-wrapper">
					<div class="items counter-wrapper">
						<div class="items__control" data-action="minus" @click="itemsCurrentDecrement">-</div>
						<div class="items__current" data-counter>{{roll.itemsCurrent}}</div>
						<div class="items__control" data-action="plus" @click="itemsCurrentIncrement">+</div>
					</div>

					<div class="price">
						<div class="price__weight">{{roll.weight}}</div>
						<div class="price__currency">{{roll.cost}} ₽</div>
					</div>

				</div>

				<button data-cart type="button" class="btn btn-block btn-outline-warning" @click="addToCart">+ в корзину</button>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['roll'],
	// data () {
	// 	return {
	// 		itemsCurrent: 1
	// 	}
	// },

	methods: {
		itemsCurrentIncrement () {
			this.roll.itemsCurrent++
		},

		itemsCurrentDecrement () {
			if (this.roll.itemsCurrent > 1) {
				this.roll.itemsCurrent--
			}
		},

		addToCart () {
			this.$emit('addToCart', this.roll)
		}
	}
}
</script>

<style scoped>
.product-img {
	width: 265px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
}

.item-title {
   font-size: 1.5rem;
   font-weight: 500;
	font-family: 'Merriweather', serif;
	height: 70px;
}

.details-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
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
/* .btn{
	border: 1px solid#eb5a1e;
	color: #eb5a1e;
	transition: 0.2s ease-in;
}
.btn:hover{
	background-color: #eb5a1e;
	color: #FFF;
} */
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
	font-size: 1.5rem;
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

</style>