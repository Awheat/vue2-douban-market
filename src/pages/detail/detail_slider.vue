<template>
	<div class="detail_slider">
		<swiper :options="swiperOption">
		  <swiper-slide v-for="slide in sliders">
		  	<a :href="slide.url" target="_blank"><img :src="slide.img"></a>
		  </swiper-slide>
		  <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script type="text/javascript">

	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'detailSlider',
		props:['sliders'],
		data() {
		    return {
		      swiperOption: {
		      	initialSlide:1,
		        autoplay: 5000,
		        loop: true,
		        setWrapperSize :true,
		        pagination : '.swiper-pagination',
		        paginationClickable :true,
		        observeParents:true
		      }
		  	}
		},
		components: {
		   	swiper,
		    swiperSlide
		}
	}
</script>
<style scoped>
	.detail_slider .swiper-slide{
		height: 300px;
		background-color: #e0e0e0;
	}
	.detail_slider .swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>