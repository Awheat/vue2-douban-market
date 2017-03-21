<template>
	<div class="db_header">
		<!-- 内容区域 -->
		<div class="db_header_main">
			<!-- logo和搜索icon -->
			<div class="db_logo_box" v-show="!isSearch">
				<div class="db_logo_text">豆瓣市集</div>
				<div class="db_search_icon" v-on:click="onSearch"><i class="fa fa-search"></i></div>
			</div>
			<!-- 搜索块 -->
			<div class="db_search_box" v-show="isSearch">
				<input type="text" name="content" class="ipt_search">
				<span class="btn_search" v-on:click="onSubmit"><i class="fa fa-search"></i></span>
			</div>
		</div>
		<!-- mask遮罩层 -->
		<div class="db_mask" v-show="isSearch" v-on:click="onTapMask"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				isSearch:false
			}
		},
		methods: {
			onSearch: function(){
				this.isSearch = !this.isSearch;
			},
			onTapMask: function(){
				this.isSearch = !this.isSearch;
			},
			onSubmit: function(){
				let v = document.querySelector(".ipt_search").value;
				alert(v);
			}
		}
	}
</script>
<style scoped>
	.db_header .db_header_main{
		position: relative;
		z-index: 110;
		overflow: hidden;
		background-color: #68cb78;
	}
	/* logo盒子css */
	.db_header .db_logo_box{
		height: 50px;
		line-height: 50px;
	}
	.db_header .db_logo_text{
		display: inline-block;
		color: #fff;
		font-size: .8rem;
		font-weight: 600;
		margin: 0 .5rem;
	}
	.db_header .db_search_icon{
		float: right;
		padding: 0 20px;
		cursor: pointer;
	}
	.db_header .db_search_icon i{
		color: #fff;
		font-size: .7rem;
		vertical-align: sub;
	}
	/* search盒子css */
	.db_header .db_search_box{
		position: relative;
		height: 30px;
		margin:20px 30px;
		padding: 0 20px;
		border: 1px solid #fff;
		border-radius: 30px;
	}
	.db_header .ipt_search{
		width: 100%;
		line-height: 30px;
		border: none;
		color: #fff;
		background-color: transparent;
	}
	.db_header .btn_search{
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		display: block;
		line-height: 30px;
		padding: 0 15px;
		color: #fff;
		font-size: .5rem;
	}
	.db_header .db_mask{
		position: fixed;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	z-index: 100;
    	width: 100%;
    	height: 100%;
    	background-color: rgba(0,0,0,0.5);
	}
</style>