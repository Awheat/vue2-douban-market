<template>
	<div class="my">
		<header-bar></header-bar>
		<nav-bar></nav-bar>
		<div class="db_hot_product db_products" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
			<ul>
				<li v-for="product in productList">
					<div class="pdt_item">
						<a :href="product.url+'/'+product.id" class="pdt_img">
							<img v-lazy="product.src" height="300" width="300">
						</a>
						<div class="pdt_detail">
							<h3 class="pdt_title">
								<a :href="product.url">{{product.title}}</a>
							</h3>
							<p class="pdt_price">
								<span class="pdt_new_price">{{product.newPrice}}</span>
								<del class="pdt_old_price">{{product.oldPrice}}</del>
							</p>
						</div>
					</div>
				</li>
			</ul>
			<div class="none" v-show="tips">已没有更多数据...</div>
		</div>

		<div class="loading" v-show="loading"></div>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import axios from 'axios'
	import infiniteScroll from 'vue-infinite-scroll'
	import TEST_IMAGE_SRC from'../../assets/images/test_hot_product.jpg';
	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'

	Vue.use(infiniteScroll);
	export default {
		data() {
			return {
				productList: [],
				data: [],
				tips:false,
				loading:false,
				num:10,
    			busy: false
			}
		},
		mounted() {
			
		},		
		methods: {
			getData(){
				axios.get('/mock/products/products.json').then((response)=>{
					var result = response.data.list.slice(this.num-10,this.num);
					console.log(result);
					if(result.length !== 0){
						this.loading = false;
						for(let i in result){
							this.productList.push({
								id:result[i].id,
								src:result[i].src,
							    url:result[i].url,
							    title:result[i].title,
							    newPrice: result[i].newPrice,
							    oldPrice: result[i].oldPrice
							});
						}
						this.busy = false;
						this.num+=10;
					}else{
						this.busy = true;
						this.tips = true;
						this.loading = false;
					}	
				})
			},
		    loadMore() {
		      	this.busy = true;
		      	this.loading = true;
		      	setTimeout(() => {
			        this.getData();
			    }, 1000);
		      	
		    }
		},
		components: {
			HeaderBar,
			NavBar
		}
	}
</script>
<style scoped>
	.loading{
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10000;
		width: 16px;
		height: 16px;
		margin: -16px 0 0 -16px;
		background: url(../../assets/images/loading.gif);
	}
	.none{
		text-align: center;
		padding: 10px 0;
		color: #999;
		font-size: 12px;
	}
</style>