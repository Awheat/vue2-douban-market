<template>
	<div class="home">
		<header-bar></header-bar>
		<nav-bar :isFixed="isFixed"></nav-bar>
		<slider :sliders="sliders"></slider>
		<hot-product :hotProducts="hotProducts"></hot-product>
		<hot-shop></hot-shop>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'
	import Slider from './slider.vue'
	import HotProduct from './hot_product.vue'
	import HotShop from './hot_shop.vue'

	export default {
		data() {
			return {
				isFixed:false,
				sliders:[],
				hotProducts:[],
				hotShops:[]
			}
		},
		mounted() {
			window.addEventListener('scroll',this.handlerScroll);
			/* 加载轮播图数据 */
			this.getSliders();
			/* 加载热门商品 */
			this.getHotProducts();
		},
		methods: {
			/* 监听滚动条事件 */
			handlerScroll: function(){
				let _top_ = document.body.scrollTop;
				if(_top_>50){
					this.isFixed = true;
				}else{
					this.isFixed = false;
				}
			},
			getSliders(){
				axios.get('/mock/home/sliders.json').then((response)=>{
					this.sliders = response.data.list;
				}).catch(function(error){
					console.log('请求slider数据:'+error);
				});
			},
			getHotProducts(){
				axios.get('/mock/products/products.json').then((response)=>{
					this.hotProducts = response.data.list.slice(0,6);
				}).catch(function(error){
					console.log('请求热门商品数据:'+error);
				});
			}
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