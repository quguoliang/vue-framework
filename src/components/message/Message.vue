<template>
	<transition name="fade" mode="out-in">
		<div class="message-bg" :class="type" v-if="visible">
			<svg-icon :iconName="type" iconClass="logoIcon"></svg-icon>
			<div class="content">
				{{ content }}
				<svg-icon v-if="isClose" iconName="close" iconClass="close" @click.native="visible = false"></svg-icon>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'Message',
	data() {
		return {
			content: '这是一条普通的消息',
			timeOut: 2000,
			visible: false,
			type: 'info', //默认是info,可选success、error、warning
			isClose: false,
		};
	},
	mounted() {
		this.close();
	},
	methods: {
		close() {
			window.setTimeout(() => {
				this.visible = false;
			}, this.timeOut);
		},
	},
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.message-bg {
	position: absolute;
	top: 20px;
	left: 50%;
	width: 350px;
	height: 45px;
	text-align: left;
	line-height: 45px;
	font-size: 12px;
	transform: translateX(-50%);
	.close {
		position: absolute;
		top: 15px;
		right: 20px;
		display: inline-block;
		width: 12px;
		height: 12px;
		color: #c5c8ce;
		vertical-align: 1px;
		cursor: pointer;
	}
}
@mixin logoCommonStyle {
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	vertical-align: middle;
	margin: 0 10px 0 20px;
}
.info {
	background-color: #edf2fb;
	border: 1px solid #ebeef5;
	font-size: 1rem;

	.logoIcon {
		@include logoCommonStyle;
		color: #909399;
	}
	.content {
		display: inline-block;
		color: #909399;
	}
}
.warning {
	background-color: #fdf6ec;
	border: 1px solid #faecd8;
	font-size: 1rem;
	.logoIcon {
		@include logoCommonStyle;
		color: #e8aa50;
	}
	.content {
		display: inline-block;
		color: #e8aa50;
	}
}
.success {
	background-color: #f0f9eb;
	border: 1px solid #e1f3d8;
	font-size: 1rem;
	.logoIcon {
		@include logoCommonStyle;
		color: #67c239;
	}
	.content {
		display: inline-block;
		color: #67c239;
	}
}
.error {
	background-color: #fef0f0;
	border: 1px solid #fde2e2;
	font-size: 1rem;
	.logoIcon {
		@include logoCommonStyle;
		color: #f56d6c;
	}
	.content {
		display: inline-block;
		color: #f56d6c;
	}
}
</style>
