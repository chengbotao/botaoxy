/*
 * @Author: Chengbotao
 * @Date: 2022-09-19 14:34:45
 */
declare module '*.vue' {
  import { defineComponent, App } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(Vue: App): void;
  };
  export default component;
}
