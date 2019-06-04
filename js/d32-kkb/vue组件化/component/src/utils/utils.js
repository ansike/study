/* eslint-disable no-param-reassign */
import { broadcast, dispatch } from './messageTools';
import Bus from './bus';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$broadcast = broadcast;
    Vue.prototype.$dispatch = dispatch;
    Vue.prototype.$bus = new Bus();
  },
};
