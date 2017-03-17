<template>
	<div class="db_hot_product db_products">
		<ul>
			<li v-for="product in hotProducts">
				<div class="pdt_item">
					<a :href="product.url+'/'+product.id" class="pdt_img">
						<img :src="product.src" height="300" width="300">
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
	</div>
</template>
<script type="text/javascript">
	export default {
		props:['hotProducts']
	}
</script>
<style lang="scss"></style>