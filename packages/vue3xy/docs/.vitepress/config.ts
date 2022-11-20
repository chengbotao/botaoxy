/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 12:35:59
 */

export default {
  base: "/vue3xy/",
  title: 'Vue3xy',
  description: 'Vue3 UI library',
  lastUpdated: false,
  appearance: false,
  themeConfig: {
    socialLinks:[
      {icon: "github", link: "https://github.com/chengbotao"}
    ],
    sidebar: {
      "/examples/": [{
        text: "基础组件",
        items: [
          {
            text: "Icon<图标>",
            link: "/examples/icon",
          },
          {
            text: "Button<按钮>",
            link: "/examples/button",
          },
          {
            text: "Input<输入框>",
            link: "/examples/input",
          },
        ],
      }],
    },
    docFooter: {
      prev: '上一个组件',
      next: '下一个组件'
    }
  }

}
