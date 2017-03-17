<template>
	<div class="list_nav">
		<ul>
			<li class="cur"><a href="#">全部</a></li>
			<li><a href="#">男上装</a></li>
			<li><a href="#">男下装</a></li>
			<li><a href="#">裙装</a></li>
			<li><a href="#">女套装</a></li>
			<li><a href="#">女上装</a></li>
			<li><a href="#">女下装</a></li>
			<li><a href="#">裙装</a></li>
			<li><a href="#">女套装</a></li>
			<li><a href="#">女上装</a></li>
			<li><a href="#">女下装</a></li>
		</ul>
	</div>
</template>
<style scoped>
	.list_nav{
		height: 40px;
		overflow: hidden;
		background-color: #68cb78;
	}
	.list_nav ul{
		width: auto;
		height: 60px;
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
	.list_nav ul li{
		display: inline-block;
		padding: 0 15px;
		line-height: 40px;
	}
	.list_nav ul li.cur a{
		color: #fff;
	}
	.list_nav ul li a{
		color: #333;
		font-size: 14px;
	}
</style>