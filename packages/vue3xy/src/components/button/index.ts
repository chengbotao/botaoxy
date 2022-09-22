/*
 * @Author: Chengbotao
 * @Date: 2022-09-19 14:27:20
 */
import { App } from 'vue';
import Button from './button.vue';

Button.install = (Vue: App) => {
  Vue.component(Button.name, Button);
};
export default Button;
