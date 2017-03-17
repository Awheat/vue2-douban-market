<template>
	<div class="db_nav" :class="{fixed:isFixed}">
		<ul>
			<li v-for="item in navItem"><router-link :to="item.url">{{item.text}}</router-link></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['isFixed'],
		data() {
			return {
				navItem: [
					{text:"首页",url:"/home"},
					{text:"分类",url:"/category"},
					{text:"购物车",url:"/cart"},
					{text:"我的",url:"/my"},
				]
			}
		}
	}
</script>
<style lang="scss">
	.db_nav{
		height: 43px;
		line-height: 43px;
		border-bottom: 2px solid #3ba94d;
		background-color: #fff;
	}
	.db_nav ul {
		white-space: nowrap;
	    overflow-x: auto;
	    -webkit-overflow-scrolling: touch;
	    display: -o-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    width: 100%;
	}
	.db_nav ul li{
	    display: inline-block;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    flex: 1;
	    vertical-align: middle;
	    text-align: center;
	}
	.db_nav ul li a.active{
		color:#3ba94d;
	}
	.db_nav ul li a{
		color: #4a4a4a;
		font-size: 15px;
	}
	.db_nav.fixed{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>