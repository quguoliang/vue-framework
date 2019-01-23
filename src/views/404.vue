<template>
	<div class="error">
		<span class="error-text">
			页面好像被装进盒子里面了........{{ second }}秒后
			<router-link to="/index">返回首页</router-link>
		</span>
	</div>
</template>

<script>
export default {
	name: 'Error',
	data() {
		return {
			second: 5,
		};
	},
	mounted() {
		this.interval = setInterval(() => {
			if (this.second > 0) {
				this.second -= 1;
			} else {
				this.$router.replace({ name: 'home' });
			}
		}, 1000);
	},
	beforeDestroy() {
		this.interval && clearInterval(this.interval);
	},
};
</script>

<style lang="scss" scoped>
.error {
	background: url('../assets/images/404.gif') no-repeat center center;
	width: 100vw;
	height: 55vh;
	.error-text {
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 25px;
		margin-top: 56vh;
	}
}
</style>
