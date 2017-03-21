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

		<div class="db_products" v-infinite-scroll="getProducts" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
			<ul>
				<li v-for="product in products">
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
			<loading v-show="isShowLoadingTips"></loading>
			<none v-show="isShowLoadedTips"></none>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import ListHeader from './list_header.vue'
	import ListNav from './list_nav.vue'
	import Loading from '../../components/loading.vue'
	import None from '../../components/none.vue'

	export default {
		data() {
			return {
				flag: true
			}
		},
		computed: {
			//映射State
            ...mapState([
            	'products',
                'busy',
                'isShowLoadingTips',
                'isShowLoadedTips'
            ])
        },
		methods: {
			...mapActions(['getProducts']),
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