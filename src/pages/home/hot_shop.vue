<template>
	<div class="db_hot_shop" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="{num}">
		<!-- 一个店铺 -->
		<div class="db_shop_item" v-for="shop in hotShops">
			<!-- 店铺名称和简介 -->
			<div class="shop_info">
				<h3 class="shop_top">
					<a href="" class="shop_img"><img :src="shop.icon" ></a>
					<a href="#" class="shop_name">{{shop.name}}</a>
				</h3>
				<p class="shop_intrduction">{{shop.intrduction}}</p>
			</div>
			<!-- 店铺热门商品 -->
			<div class="shop_product db_products">
				<ul>
					<li v-for="pd in shop.products">
						<div class="pdt_item">
							<a :href="pd.url+'/'+pd.id" class="pdt_img">
								<img v-lazy="pd.src" height="300" width="300">
							</a>
							<div class="pdt_detail">
								<h3 class="pdt_title">
									<a :href="pd.url+'/'+pd.id">{{pd.title}}</a>
								</h3>
								<p class="pdt_price">
									<span class="pdt_new_price">{{pd.newPrice}}</span>
									<del class="pdt_old_price">{{pd.oldPrice}}</del>
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<p class="shop_entry"><a :href="shop.url">进入店铺 >></a></p>
		</div>
		
		<!-- 加载更多，没有数据组件 -->
		<loading v-show="loading"></loading>
		<none v-show="tips"></none>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import axios from 'axios'
	import infiniteScroll from 'vue-infinite-scroll'
	import Loading from '../../components/loading.vue'
	import None from '../../components/none.vue'
	export default {
		data(){
			return {
				hotShops:[],
				tips:false,
				loading:false,
				num:5,
    			busy: false
			}
		},
		methods: {
			getData(){
				axios.get('/mock/home/hot_shop.json').then((response)=>{
					var result = response.data.list.slice(this.num-5,this.num);
					console.log(result);
					if(result.length !== 0){
						this.loading = false;
						for(let i in result){
							this.hotShops.push({
								icon:result[i].icon,
							    name:result[i].name,
							    intrduction:result[i].intrduction,
							    products: result[i].products,
							    url: result[i].url
							});
						}
						this.busy = false;
						this.num+=5;
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
			Loading,
			None
		}
	}
</script>
<style lang="scss">
	.db_hot_shop .db_shop_item {
		margin-bottom: 30px;
		-webkit-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
		-moz-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
		box-shadow:0 0 1px rgba(0, 0, 0, .1);  
		background-color: #fff;
	}
	.db_hot_shop .shop_info{
		padding: 25px 10px;
	}
	.db_hot_shop .shop_top{
		height: 30px;
		line-height: 30px;
	}
	.db_hot_shop .shop_img{
		display: block;
		width: 20px;
		height: 30px;
		line-height: 23px;
		float: left;
		margin-right: 10px;
	}
	.db_hot_shop .shop_img img{
		max-width: 100%;
		max-height: 100%;
		vertical-align: middle;
	}
	.db_hot_shop .shop_name{
		display: block;
		width: 70%;
		color: #4a4a4a;
	} 
	.db_hot_shop .shop_intrduction{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #9b9b9b;
		font-size: 15px;
	}
	.db_hot_shop .shop_entry{
		text-align: right;
		padding: 0 10px 10px 10px;
		box-sizing: border-box;
	}
	.db_hot_shop .shop_entry a{
		color: #4a4a4a;
		font-size: 15px;
	}
	.loading{
		text-align: center;
		color: #999;
		font-size: 12px;
	}
	.none{
		text-align: center;
		color: #999;
		font-size: 12px;
	}
</style>