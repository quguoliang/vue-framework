<template>
	<div>
		<h1>This is index page</h1>
	</div>
</template>
<script>
export default {
	name: 'index',
	components: {},
	mounted() {
		this.$message({
			content: '哈哈，这是一条成功的消息',
			timeOut: 4000,
			isClose: true,
			type: 'success',
		});
	},
};
</script>
<style lang="scss" scoped></style>
