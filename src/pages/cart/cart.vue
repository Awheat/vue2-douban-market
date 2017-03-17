<template>
	<div class="cart">
		<header-bar></header-bar>
		<nav-bar></nav-bar>
		<div class="login_false">
			<div class="login_false">还未登录,请使用豆瓣账号登录</div>
			<div class="login_entry">
				<p class="login_tip2">登录豆瓣账号后，可以进行订单查询，使用优惠券</p>
				<a href="#/login" class="btn_login">登录</a>
				<p class="btn_regist">没有豆瓣账号?<a href="#">注册</a></p>
			</div>
			<div class="anonymous">
				<p>使用匿名购买，则可以点击以下链接查询订单</p>
				<p><a href="#">查询订单</a></p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'

	export default {
		components: {
			HeaderBar,
			NavBar
		}
	}
</script>
<style scoped>
	.login_false .login_false{
		text-align: center;
		padding: 1rem 0;
		border-bottom: 1px solid #9d9d9d;
		background-color: #f8f8fe;
	}
	.login_false .login_entry{
		padding: 20px;
		text-align: center;
		border-bottom: 1px solid #9d9d9d;
		background-color: #fff;
	}
	.login_false .login_entry .login_tip2{
		color: #4a4a4a;
	}
	.login_false .login_entry .btn_login{
		display: block;
		padding: 10px 0;
		text-align: center;
		margin: 15px 0;
		color: #fff;
		font-size: 14px;
		border-radius: 5px;
		background-color: #68cb78;
	}
	.login_false .login_entry .btn_regist{
		color: #9d9d9d;
	}
	.login_false .login_entry .btn_regist a{
		color: #68cb78;
	}
	.login_false .anonymous{
		text-align: center;
		color: #9b9b9b;
		padding-top: 2rem;
	}
	.login_false .anonymous p{
		padding: 5px 0;
	}
	.login_false .anonymous a{
		color: #68cb78;
	}
</style>