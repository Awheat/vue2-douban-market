<template>
	<div class="home">
		<header-bar></header-bar>
		<nav-bar></nav-bar>
		<slider></slider>
		<hot-product :hotProducts="hotProducts"></hot-product>
		<hot-shop></hot-shop>
	</div>
</template>

<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'
	import Slider from './slider.vue'
	import HotProduct from './hot_product.vue'
	import HotShop from './hot_shop.vue'

	export default {
		computed: {
			//映射State
            ...mapState([
            	'hotProducts'
            ])
		},
		mounted() {
		    //获取热门商品列表
			this.getHotProducts();
		},
		methods: {
			...mapActions(['getHotProducts'])
		},
		components: {
			HeaderBar,
			NavBar,
			Slider,
			HotProduct,
			HotShop
		}
	}
</script>
<style lang="scss">
	@import '../../assets/css/home/products.scss';
	.home{
		padding-bottom: 30px;
		background-color: #f8f8fe;
	}
	.swiper-pagination .swiper-pagination-bullet{
		opacity: 1;
		background: #fff;
	}
	.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
		background: #68cb78 !important;
	}
</style>