import Vue from 'vue';
import SvgIcon from '@/components/svgIcon/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon); //全局注册

//通过webpack的require.context()方法读取icons文件下的svg文件下的全部SVG图片
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', true, /\.svg$/);

requireAll(req);
