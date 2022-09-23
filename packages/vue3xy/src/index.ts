/*
 * @Author: Chengbotao
 * @Date: 2022-09-19 17:16:51
 */
import { App } from 'vue';
import XyButton from './components/button';

const components = [XyButton];

const install = (Vue: App) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 导出单个
export { XyButton };
// 导出所有
export default {
  install,
};
