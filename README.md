vue3+vite项目环境的基础配置，可以作为以后得初始项目使用，主要在空白vue项目中进行了如下修改：
1、修改配置项vite.config.js,包括修改开发环境的启动端口号为 8080；配置路径别名alias；此时项目中 src 目录下的引用路径可以写成 @/components、@/router。
2、单页面项目，安装路由插件，并在src目录下新建 views 文件夹，在文件夹内再新建两个文件 Home.vue、About.vue用以后续的功能测试；另外，在该文件夹下建立router文件夹，并创建index.js文件用以管理路由，通过 createRouter 方法初始化路由实例，并配置完路径导出实例之后，需要前往 main.js 引入注册路由实例；最后
，在入口根页面 App.vue 展示路由对应的页面组件
3、引入 Vant UI 组件库（yarn add vant）。在基于 vite、webpack 或 vue-cli 的项目中使用 Vant 时，可以使用 unplugin-vue-components 插件，它可以自动引入组件，并按需引入组件的样式。安装插件（yarn add unplugin-vue-components -D）；配置插件（vite.config.js）紧接着在代码中直接引入 Vant 组件，，首先去 main.js 引入 Vant，完成注册后，打开 src/views/Home.vue 组件，添加 Button 组件
4、引入less预处理(yarn add less -D)。
5、移动端分辨率适配 rem。移动端的适配是个头疼的问题，早期前端开发使用的是 CSS 媒体查询的方式写多套 CSS 样式，以适应不同分辨率对网页造成的差异，元素塌陷等问题。后来引入了 rem 的概念，那么什么是 rem？ rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。设置 html 的 font-size 属性，rem 是根据它的大小来动态变化整个项目中使用 rem 单位的元素大小。在项目中引入 lib-flexible（yarn add lib-flexible），在 main.js 中全局引入
6、请求库 Axios 二次封装（yarn add axios）。
7、引入阿里 iconfont 图标。
8、设置公共样式。在 src 目录下新建 common/style/base.less、 common/style/mixin.less
9、主题色配置。通过修改全局 CSS 变量 --van-primary-color 来控制 Vant 组件库的主题色。在 src/common/style 文件夹下新建 theme.css，然后在 main.js 中全局引入
综上所述，整个项目的配置是：Vue3.2.x + Vue-Router4.x + Pinia + Vant4.x + Less + Vite 4.x + Axios 。主要配置了开发端口、路径别名、路由vue-router、vant ui组件库、less预处理、移动端分辨率适配 rem、请求库 Axios 二次封装、引入阿里 iconfont 图标、公共样式、主题色配置。
