<template>
	<!-- 讨论列表 -->
	<div class="db_comments">
		<!-- 一条讨论 -->
		<div class="comment_item">
			<div class="comment_infos">
				<img src="http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg" class="u_photo">
				<span class="u_name">张三</span>
				<span class="u_time">2016-07-07 16:23:44</span>
			</div>
			<div class="comment_text">180偏瘦的人买XL的还是XXL的？</div>
		</div>

		<!-- 一条讨论 -->
		<div class="comment_item">
			<div class="comment_infos">
				<img src="http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg" class="u_photo">
				<span class="u_name">李四</span>
				<span class="u_time">2016-07-07 16:23:44</span>
			</div>
			<div class="comment_text">可不可以防水防火防电</div>
		</div>

		<!-- 一条讨论 -->
		<div class="comment_item">
			<div class="comment_infos">
				<img src="http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg" class="u_photo">
				<span class="u_name">王五</span>
				<span class="u_time">2016-07-07 16:23:44</span>
			</div>
			<div class="comment_text">过几年会升值吗?</div>
		</div>
	</div>
</template>
<style type="text/css">
	.red{color: #eba887;}
	/* 评论列表 */
	.db_comments {}
	.db_comments .comment_item {
		padding: 15px;
		border-bottom: 1px solid #f0f0f0;
		box-sizing: border-box;
	}
	.db_comments .comment_item .comment_infos{
		height: 20px;
		line-height: 20px;
	}
	.db_comments .comment_item .u_photo{
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 20px;
		vertical-align: top;
	}
	.db_comments .comment_item .u_name{
		color: #9d9d9d;
		font-size: 14px;
	}
	.db_comments .comment_item .u_time{
		color: #ccc;
	}
	.db_comments .comment_item .comment_text{
		color: #4a4a4a;
		font-size: 14px;
		line-height: 20px;
		padding: 10px 0 10px 25px;
		box-sizing: border-box;
	}
	.db_comments .comment_item .comment_picture{
		font-size: 0;
		padding-left: 25px;
		box-sizing: border-box;
	}
	.db_comments .comment_item .comment_picture img{
		display:inline-block;
		width: 48px;
		height: 48px;
		margin-right: 10px;
		border: 1px solid #f0f0f0;
	}
</style>