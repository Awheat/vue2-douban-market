<template>
	<div class="db_list">
		<list-header></list-header>
		<list-nav></list-nav>
		<div class="db_list_options">
			<div class="items">
				<a href="#" class="active">总和排序 <i class="fa fa-arrow-down"></i></a>
				<a href="#">上架时间 <i class="fa fa-arrow-down"></i></a>
				<a href="#">价格 <i class="fa fa-arrow-down"></i></a>
				<a href="#">喜欢数 <i class="fa fa-arrow-down"></i></a>
			</div>
		</div>

		<div class="db_products" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
			<ul>
				<li v-for="product in productList">
					<div class="pdt_item">
						<a :href="product.url+'/'+product.id" class="pdt_img">
							<img v-lazy="product.src" height="300" width="300">
							<i class="fa fa-heart-o" v-on:click="onHeart($event)"></i>
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
			<!-- 加载更多，没有数据组件 -->
			<loading v-show="loading"></loading>
			<none v-show="tips"></none>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import axios from 'axios'
	import infiniteScroll from 'vue-infinite-scroll'
	import ListHeader from './list_header.vue'
	import ListNav from './list_nav.vue'
	import Loading from '../../components/loading.vue'
	import None from '../../components/none.vue'

	Vue.use(infiniteScroll);

	export default {
		data() {
			return {
				flag: true,
				productList: [],
				tips:false,
				loading:false,
				num:10,
    			busy: false	
			}
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
		      	
		    },
		    onHeart: function(e){
		    	if(this.flag){
		    		e.target.className="fa fa-heart";
		    		this.flag = false;
		    	}else{
		    		e.target.className="fa fa-heart-o";
		    		this.flag = true;
		    	}
		    	e.preventDefault();
		    }
		},
		components: {
			ListHeader,
			ListNav,
			Loading,
			None
		}
	}
</script>
<style scoped>
	.db_list_options {
		height: 40px;
		line-height: 40px;
		padding: 0 15px;
	}
	.db_list_options .items{
		width: 100%;
		display: flex;
		display: box;
		display: -webkit-box;
		flex-wrap:nowrap;
		justify-content: center;
	}
	.db_list_options .items a{
		display: block;
		flex: 1;
		box-flex: 1;
		-webkit-box-flex: 1;
		text-align: center;
		color: #ccc;
	}
	.db_list_options .items a.active{
		color: #f67;
	}
	.db_products .pdt_img{
		position: relative;
	}
	.db_products .pdt_img .fa{
		position: absolute;
		top: 10px;
		right: 10px;
		color: #e17c72;
		font-size: 16px;
	}
</style>