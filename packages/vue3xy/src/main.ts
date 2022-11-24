/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 11:15:28
 */
import { App } from 'vue';
import XyButton from './components/button/index';
import XyIcon from './components/icon/index';
import xyInput from './components/input/index';
import xyAutoComplete from './components/autoComplete/index';

const components: any[] = [XyButton, XyIcon, xyInput, xyAutoComplete];

const install = (Vue: App) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};
