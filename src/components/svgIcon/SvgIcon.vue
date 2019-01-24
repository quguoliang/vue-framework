<template>
	<svg :class="className" aria-hidden="true">
		<use :xlink:href="svgIconName"></use>
	</svg>
</template>

<script>
export default {
	name: 'SvgIcon',
	props: {
		iconName: {
			type: String,
			required: true,
		},
		iconClass: {
			type: String,
			default: '',
		},
	},
	computed: {
		svgIconName() {
			return `#${this.iconName}`;
		},
		className() {
			if (this.iconClass) {
				return 'svg-icon' + ' ' + this.iconClass;
			} else {
				return 'svg-icon';
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.svg-icon {
	width: 1rem;
	height: 1rem;
	fill: currentColor;
	vertical-align: -0.15rem;
	overflow: hidden;
}
</style>
