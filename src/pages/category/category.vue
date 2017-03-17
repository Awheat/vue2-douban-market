<template>
	<div class="category">
		<header-bar></header-bar>
		<nav-bar></nav-bar>
		<div class="category_list">
			<ul>
				<li v-for="cty in categorys">
					<router-link :to="cty.url" :class="cty.class_name">{{cty.text}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>


<script type="text/javascript">

	import HeaderBar from '../../components/header.vue'
	import NavBar from '../../components/nav.vue'
	export default {
		data() {
			return {
				categorys:[
					{text:"饮食",url:"/list/1",class_name:"red"},
					{text:"服装",url:"/list/2",class_name:"blue"},
					{text:"配饰",url:"/list/3",class_name:"purple"},
					{text:"包袋",url:"/list/4",class_name:"sky"},
					{text:"鞋靴",url:"/list/5",class_name:"yellow"},
					{text:"美容护肤",url:"/list/6",class_name:"pink"},
					{text:"家居",url:"/list/7",class_name:"grass"},
					{text:"时间",url:"/list/8",class_name:"green"},
					{text:"3C数码",url:"/list/9",class_name:"red"}
				]
			}
		},
		components: {
			HeaderBar,
			NavBar
		}
	}
</script>
<style scoped>
	.category_list{
		font-size: 0;
		padding: 10px 5px;
		text-align: center;
		box-sizing: border-box;
	}
	.category_list ul li{
		display: inline-block;
		width: 30%;
		height: 60px;
		margin: 0 3px 10px 3px;
	}
	.category_list a{
		display: block;
		line-height: 60px;
		text-align: center;
		color: #4a4a4a;
		font-size: 14px;
		border-radius: 5px;
	}
	.category_list .red{
		background-color: #ffb2bb;
	}
	.category_list .blue{
		background-color: #89b7ec;
	}
	.category_list .purple{
		background-color: #c2a0e0;
	}
	.category_list .sky{
		background-color: #b2e6ff;
	}
	.category_list .yellow{
		background-color: #e6e7a4;
	}
	.category_list .pink{
		background-color: #e0a0d1;
	}
	.category_list .grass{
		background-color: #b2ffc5;
	}
	.category_list .green{
		background-color: #ffb2bb;
	}
</style>