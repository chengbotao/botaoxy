/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 11:15:28
 */
import { App } from 'vue';
import XyButton from './components/button/index';
import XyIcon from './components/icon/index';

const components: any[] = [XyButton, XyIcon];

const install = (Vue: App) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};
