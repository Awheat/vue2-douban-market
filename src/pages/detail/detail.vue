<template>
	<div class="db_detail">
		<!-- 返回 -->
		<div class="db_detail_back" @click="goBack"><span class="fa fa-chevron-left"></span></div>

		<detail-slider :sliders="sliders"></detail-slider>

		<!-- 名称,价格,其它 -->
		<div class="db_detail_info">
			<div class="title">PISN2016冬季新品  超Q弹加绒打底裤</div>
			<div class="price">
				<span class="now_price">￥199</span>
				<del class="old_price">￥259</del>
			</div>
			<div class="freight">
				<div class="fre_lt">
					<span class="fre_price">运费: ￥8.00</span>
					<span class="fre_tips">非包邮区域</span>
				</div>
				<div class="fre_rt">
					<span class="fa fa-heart-o"></span>
					<span class="fa fa-envelope-o"></span>
				</div>
			</div>
		</div>
		
		<!-- 选择颜色和尺码 -->
		<div class="db_detail_choice">
			<div class="choice_style">
				<label class="choice_title">颜色</label>
				<div class="choice_items">
					<span v-for="(item,index) in colors" :class="{active:index==isColors}" @click="isColors=index">{{item}}</span>
				</div>
			</div>
			<div class="choice_style">
				<label class="choice_title">尺寸</label>
				<div class="choice_items">
					<span v-for="(item,index) in size" :class="{active:index==isSize}" @click="isSize=index">{{item}}</span>
				</div>
			</div>
		</div>
		
		<!-- 选择数量 -->
		<div class="db_detail_num">
			<label class="num_title">数量</label>
			<div class="num_option">
				<span class="minus" :class="{active:number>1}" @click="minus">-</span>
				<input type="number" name="number" class="number" v-model="number">
				<span class="addition" :class="{active:number>0}" @click="addition">+</span>
			</div>
		</div>
		
		<!-- 承诺 -->
		<div class="db_detail_promise">
			<span>豆瓣市集担保</span>
			<span>七天无理由退货</span>
			<span>正品保证</span>
			<span>独立品牌</span>
		</div>
		
		<!-- 选项卡 -->
		<div class="db_detail_tabs">
			<span @click="toggleTabs('TabsDetail',$event)" data-id="0" :class="{active:0==isActive}">商品详情</span>
			<span @click="toggleTabs('TabsRated',$event)" data-id="1" :class="{active:1==isActive}">评价<i>2</i></span>
			<span @click="toggleTabs('TabsDiscuss',$event)" data-id="2" :class="{active:2==isActive}">讨论</span>
		</div>
		
		<!-- tabs内容块-->
		<div class="db_detail_conts">
			<component :is="componentId"></component>
		</div>

		<!-- 固定栏 -->
		<div class="db_fixed_bar">
			<div class="cart"><span class="fa fa-shopping-cart"></span></div>
			<div class="add">加购物车</div>
			<div class="buy">立即购买</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	import DetailSlider from './detail_slider.vue'

	import TabsDetail from './tabs_detail.vue'
	import TabsRated from './tabs_rated.vue'
	import TabsDiscuss from './tabs_discuss.vue'

	export default {
		data() {
			return {
				sliders:[],
				isActive:0,
				isColors:0,
				isSize:0,
				number:1,
				colors:['白色','青色','紫色'],
				size: ['S','M',"L","Xl"],
				componentId:'TabsDetail'
			}
		},
		mounted(){
			/* 获取详情的轮播图 */
			this.getDetailSlider();
		},
		watch: {
		    // 监听数量的值
			number: function(val,oldVal){
				if(val<0){
					this.number = 1;
				}else{
					this.number = parseInt(val);
				}
			}
		},
		methods: {
		    //获取图片数据
			getDetailSlider(){
				axios.get('/mock/detail/detail_slider.json').then((response)=>{
					this.sliders = response.data.list;
				}).catch(function(error){
					console.log('请求slider数据:'+error);
				});
			},
			//tab选项卡的切换
			toggleTabs(componentId,e) {
				this.isActive = e.target.getAttribute("data-id");
				this.componentId = componentId;
			},
			//数量减函数
			minus() {
				if(this.number>0){
					this.number--;
				}
			},
			//数量加函数
			addition() {
				if(isNaN(this.number)){
					this.number = 0;
				}
				this.number++;
			},
			//返回
			goBack(){
				this.$router.go(-1);
			}
		},
		components: {
			DetailSlider,
			TabsDetail,
			TabsRated,
			TabsDiscuss
		}
	}
</script>
<style scoped>
	.db_detail{
		padding-bottom: 100px;
	}
	.db_detail .db_detail_back{
		position: fixed;
		top: 10px;
		left: 10px;
		z-index: 100000;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #ccc;
		font-size: 14px;
		background-color: rgba(255,255,255,.5);
		border-radius: 100%;
	}
	.db_detail .db_detail_info{
		padding: 15px;
		font-size: 16px;
		background-color: #fff;
		border-bottom: 1px solid #f0f0f0;
	}
	.db_detail .db_detail_info .title{
	}
	.db_detail .db_detail_info .price{
		margin: 10px 0;
	}
	.db_detail .db_detail_info .now_price{
		color: #e17c72;
		font-weight: 600;
	}
	.db_detail .db_detail_info .old_price{
		color: #ccc;
	}
	.db_detail .db_detail_info .freight{
		height: 20px;
		line-height: 20px;
	}
	.db_detail .db_detail_info .fre_lt{
		max-width: 80%;
		float: left;
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.db_detail .db_detail_info .fre_rt{
		float: right;
	}
	.db_detail .db_detail_info .fre_tips{
		color: #e17c72;
	}
	.db_detail .db_detail_info .fa-heart-o{
		padding-right: 10px;
		color: #e17c72;
	}
	.db_detail .db_detail_info .fa-envelope-o{
		color:#68cb78;
	}

	
	.db_detail .db_detail_choice{
		padding: 15px;
		border-bottom: 1px solid #f0f0f0;
	}
	.db_detail .db_detail_choice .choice_style{
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		line-height: 25px;
		padding: 5px 0;
	}
	.db_detail .db_detail_choice .choice_title{
		display: inline-block;
		width: 50px;
		color: #9b9b9b;
		font-size: 14px;
	}
	.db_detail .db_detail_choice .choice_items{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		box-flex: 1;
		flex: 1;
		font-size: 0;
	}
	.db_detail .choice_items span{
		display: inline-block;
		width: 70px;
		height: 25px;
		text-align: center;
		margin: 0 5px;
		color: #fff;
		font-size: 14px;
		border-radius: 20px;
		background-color: #ccc;
	}
	.db_detail .choice_items span.active{
		color: #fff;
		background-color: #68cb78;
	}

	.db_detail .db_detail_num{
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		height: 25px;
		line-height: 25px;
		padding: 15px;
		border-bottom: 1px solid #f0f0f0;
	}	
	.db_detail .db_detail_num .num_title{
		display: inline-block;
		width: 50px;
		color: #9b9b9b;
		font-size: 16px;
	}
	.db_detail .db_detail_num .num_option{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		box-flex: 1;
		flex: 1;
		font-size: 0;
		margin-left: 5px;
	}
	.db_detail .num_option .minus,
	.db_detail .num_option .addition{
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		color: #fff;
		font-size: 24px;
		font-weight: 600;
		background-color: #ccc;
		border-radius: 25px;
	}
	.db_detail .num_option .number{
		display: inline-block;
		width: 70px;
		height: 25px;
		line-height: 25px;
		color: #333;
		font-size: 16px;
		text-align: center;
		margin: 0 10px;
		border: none;
		vertical-align: top;
		background-color: #ccc;
		border-radius: 50px;
	}
	.db_detail .num_option span.active{
		background-color: #68cb78;
	}

	.db_detail_promise {
		padding: 5px 15px;
		text-align: center;
		font-size: 0;
	}
	.db_detail_promise span{
		color: #9b9b9b;
		font-size: 12px;
		padding: 0 5px;
	}
	.db_detail_promise span:first-of-type{
		border-right: 1px solid #ccc;
	}
	.db_detail_promise span:nth-of-type(3){
		border-right: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}

	
	.db_detail_tabs {
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		height:40px;
		margin-top: 30px;
		border-bottom: 2px solid #e17c72;
	}
	.db_detail_tabs span{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		box-flex: 1;
		flex: 1;
		line-height: 40px;
		text-align: center;
		color: #666;
		font-size: 16px;
	}
	.db_detail_tabs span.active{
		color: #e17c72;
	}
	.db_detail_tabs span i{
		font-style: normal;
	}

	.db_fixed_bar{
		position: fixed;
		left: 0;
		bottom: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: box;
		display: flex;
		width: 100%;
		height: 50px;
		background-color: #f8f8fe;
	}
	.db_fixed_bar > div{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		box-flex: 1;
		flex: 1;
		line-height: 50px;
		text-align: center;
		color: #fff;
		font-size: 14px;
	}
	.db_fixed_bar .cart{
		color: #9d9d9d;
		font-size: 16px;
	}
	.db_fixed_bar .add {
		background-color: #eba887;
	}
	.db_fixed_bar .buy{
		background-color: #e17c72;
	}
</style>