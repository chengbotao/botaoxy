/*
 * @Author: Chengbotao
 * @Date: 2022-10-11 15:34:39
 */
import DefaultTheme from "vitepress/theme";
import vue3xy from "../../../src/main";
import "../../../../themes/src/index.scss"
export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
        app.use(vue3xy)
    }
}