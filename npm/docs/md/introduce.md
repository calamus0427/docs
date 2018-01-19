<h1 align="center">vue从入门到女装
</h1>


<p align="center">
  <b>——Calamus</b>
  <br><br>
  <a href="https://www.calamus.xyz">
    <img src="../img/2.jpg" width=200>
    <img src="../img/tx.jpg" style="margin-left:20px;" width=200>  
  </a>
</p>

## 项目演示及基础知识储备
### 项目演示
- demo1
![img](../img/demo1.gif)
- demo2
![img](../img/demo2.gif)
- radar
![img](../img/radar.gif)
### 基础知识储备
![img](../img/vue入门.jpg)

#### 需要一定的前端基础
- html 👻
- css  💯
- javascript 🙌

## vue特点
#### MVVM模型
- MVC（Model-View-Controller）:
  - 接受用户指令时，MVC 可以分成两种方式。一种是通过 View 接受指令，传递给 Controller。
  - 另一种是直接通过controller接受指令。
<br>
![img](../img/mvc.png)
- MVP（Model-View-Presenter）:
MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。
  - 各部分之间的通信，都是双向的。

  - View 与 Model 不发生联系，都通过 Presenter 传递。

  - View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。
  <br>
![img](../img/mvp.png)
- MVVM（Model-View-ViewModel）:
MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。
  <br>
![img](../img/mvvm.png)
#### 单页面应用
一个单页的应用程序(Single-page application)是一个Web应用程序或网站，通过动态地重写当前页面而不是从服务器加载整个新的网页与用户交互。 
- Angular
- vue
- Ember.js
- Meteor.js
- ExtJS
- React

- 优点：
  - 具有桌面应用的即时性、网站的可移植性和可访问性。
  - 用户体验好、快，内容的改变不需要重新加载整个页面，web应用更具响应性和更令人着迷。
  - 基于上面一点，SPA相对对服务器压力小。
  - 良好的前后端分离。SPA和RESTful架构一起使用，后端不再负责模板渲染、输出页面工作，web前端和各种移动终端地位对等，后端API通用化。
- 缺点：
  - 分功能模块的鉴权不好实现。
  - 不利于SEO,现在可以通过Prerender等技术解决一部分。
  - 初次加载耗时相对增多。
  - 前进、后退、地址栏等，需要程序进行管理。

### 双向数据绑定
比如你改变一个输入框 Input 标签的值，会自动同步更新到页面上其他绑定该输入框的组件的值
![img](../img/双向绑定数据.gif)
### 组件化
页面上小到一个按钮都可以是一个单独的文件.vue，这些小组件直接可以像乐高积木一样通过互相引用而组装起来
![img](../img/组件化特点.png)
以element-ui的button组件示例，下图的每一个button都是一个单独的组件，以达到代码的最大化复用：
![img](../img/组件示例.gif)
#### 组件注册
##### 全局注册
要注册一个全局组件，可以使用 Vue.component(tagName, options)，注册在跟实例下。
```
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
```
##### 局部注册
你不必把每个组件都注册到全局。你可以通过某个 Vue 实例/组件的实例选项 components 注册仅在其作用域中可用的组件。
```
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  // ...
  components: {
    // <my-component> 将只在父组件模板中可用
    'my-component': Child
  }
})
```

#### 封装组件
** 封装组件的三种方法： **
##### vue单页面组件
这种方法常用在vue文件中
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎！'
    }
  }
}
</script>
```
##### script模板
```
  <script type="text/x-template" id="myComponent">//注意 type 和id。
      <div>This is a component!</div>
  </script>
  <script>
    //全局注册组件
    Vue.component('my-component',{
        template: '#myComponent'
    })

    new Vue({
        el: '#app'
    })
  </script>
```
##### html模板
```
  <template id="myComponent">
      <div>This is a component!</div>
  </template>
  
  <script>
    Vue.component('my-component',{
        template: '#myComponent'
    })
    new Vue({
        el: '#app'
    })
  </script>
```
或者
```
    <script>
    var myComponent = 
            `<div>This is a component!</div>
             <p>----Calamus</p>`;
    Vue.component('my-component',{
        template: myComponent
    })
    new Vue({
        el: '#app'
    })
  </script>
```
#### 开发组件
##### 安装vue
- script标签导入
```
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
- vue-cli安装
```npm
  # 全局安装 vue-cli
  $ npm install --global vue-cli
```
```
  # 创建一个基于 webpack 模板的新项目
  $ vue init webpack my-project
```
<p class="danger">
  注意：一些eslink e2e等工具是语法检查用的，建议最开始关闭，不然比较麻烦
</p>
![img](../img/vue-cli.png)
```
  # 安装依赖
  $ cd my-project
  $ npm install
```
```
  # 运行
  $ npm run dev
```
```
  # 打包编译
  $ npm run build
```
<p class="danger">
  注意：build之后出现js、css等资源加载404问题，是webpack配置相对路径错误导致,路径给为 './'即可
</p>
![img](../img/build.png)
<p class="danger">
  注意：build之后出现font等字体文件加载错误，也是webpack配置问题，修改build->webpack.base.conf.js 里css-loader的limit值，比你的font文件大即可
</p>
![img](../img/limit.png)


- bower安装
```
  $ bower install vue
```
##### 组件间通信
###### 父子组件通信
###### 兄弟组件通信
### vue生命周期
![img](../img/vue-life.png)
![img](../img/vue-life-js.png)
### 和其他框架的对比
#### react
- 相同点：
  - React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
  - 中心思想相同：一切都是组件，组件实例之间可以嵌套。
  - 都提供合理的钩子函数，可以让开发者定制化地去处理需求。
  - 都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。在组件开发中都支持mixins的特性。
- 不同点：
  - React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。
  - Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。

#### angular
- 相同点：
  - 都支持指令：内置指令和自定义指令。
  - 都支持过滤器：内置过滤器和自定义过滤器。
  - 都支持双向数据绑定。
  - 都不支持低端浏览器。
- 不同点：
  - AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观。
  - 在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。对于庞大的应用来说，这个优化差异还是比较明显的。
## vue+element开发管理后台示例
## vue插件
### vue-router
```javascript
  // 使用
  import VueRouter from "vue-router";
  import router from "./router/index.js";
```
```javascript
  // 示例
  import yourVies from "../views/index"
  export default new Router({
  routes: [
    {
      path: '/',
      name: "index",
      component: index,
            children: [
              {
                path:"/text",
                name:"text",
                component:text
              }]
    },      {
        path:'/error',
        name: 'error',
        component: code404
      },
      //一定要放到最后
          {
      path: "*",
      redirect: "/error"
    }]
  })
```
### element-ui
#### 安装
- cdn引入
```
<!-- 引入样式 --> <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- 先引入 Vue --> <script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 引入组件库 --> <script src="https://unpkg.com/element-ui/lib/index.js"></script>
```
- npm安装
```
  # 安装
  $ npm i element-ui -S
```
```
//使用 index.js
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)
```
示例：
![img](../img/element.png)
### axios
```
  # 安装
  $ npm install axios --save
```
```javascript
  //使用
  // index.js
  import axios from 'axios'
  Vue.prototype.$http = axios
  // 全局配置示例axios.js
  axios.defaults.timeout = 5000 ;
  axios.defaults.baseURL = "http://66.112.214.33"
  axios.defaults.baseURL = "";
  axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  axios.defaults.transformRequest = [function(param) {
        let ret = "";
        for (let it in param) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(param[it]) + "&";
        }
        ret = ret.slice(0, ret.length - 1);
        return ret;
      }];
  // 使用示例
  this.$http.post('url',data).then(
    (successData) => {
      this.$set(this.data,"url",successData.data.url);
      successData.data)
      console.log("success",this.data,"||",successData.data)
      },
    (failData) => {console.log("fail",failData)}
          );
```
### sass
![img](../img/sass.gif)
CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。
- sass
- less
- Stylus
#### 安装 vue-sass/scss
```
  $ npm install node-sass --save-dev
  $ npm install sass-loader --save-dev
```
vue项目中使用sass
<p class="warning">
  注意：sass 和 scss 的语法区别
</p>
```
  <style scoped lang="sass"></style>
```
  其他地方用sass需要编译成浏览器能解读的css才能正常使用，推荐koala软件
### mock
```
  # 安装
  $ npm install mockjs
```
```javascript
  //示例
  Mock.mock("mock_table", "post",function(options) {
  console.log("mock", options);
  return Mock.mock({
     'list|10-20' : [{
        loginName: "@name",
        msgName:"@name",
        title:"@name",
        "id|1-100": 100,
        "status|1-13": 1,
        "poicyType|1-3":1,
        color: "@color",
        date: "@date('yyyy-MM-dd')",
        email: "@email",
        datetime: "@time",
        // 'sex':Random.sex(),
        range: "@range",
        character: "@character",
        float: "@float",
        int: "@int",
        boolean: "@boolean",
        img: "@image('40x40', '#00405d', '#FFF', 'coocaa')",
        iconPath: "@dataImage('50x40','coocaa')",
        url: "@url",
        "string|1-10": "★",
        "weekday|1": ["周一", "周二", "周三", "周四", "周五", "周六", "周天"]
  }]});
});
```
### vuex
组件交互状态管理包，简单的父子组件通信需求不高的可以暂时不用这个
```
  # 安装
  $ npm install vuex --save
```
### echart
```
  # 安装
  $ npm install echarts -S
```

### others
富文本编辑器vue-editor2，代码编辑器vue-codemirror，markdown编辑器vue-markdown等
## 写文档
### vue-docute
- 不需要服务器端，完全静态网站
- 不需要编译， markdown 文件是访问的时候自动解析
- 部署方便，比如 github pages 或者作为一个 index.html 部署到任何地方
- 方便定制，可以用于很大的文档也可以只有一个 README.md
- 默认主题非常优雅
![img](../img/1.gif)
![img](../img/5-1.png)
![img](../img/5-2.png)
![img](../img/5-3.png)
![img](../img/5-4.png)
![img](../img/5-5.png)
![img](../img/5-6.png)
![img](../img/5-7.png)
![img](../img/5-8.png)
![img](../img/5-9.png)
The development setup is basically webpack + vue:

```bash
cd docute
npm run dev
# then edit files in ./src dir and save to reload
```
## 前端调试
### chrome 开发者工具
### Fiddler/charles
### 跨平台调试

## 前端测试
### 单元测试
#### Jasmine
#### Mocha
#### Chai
#### Sinon
### 自动化单元测试
#### Karma
### 基准测试
#### Benchmark.js
### 代码覆盖率测试
#### Istanbul

## 性能优化
### 前端常用chrome插件
#### FE
![img](../img/fe.png)
#### Vue devtools
![img](../img/vue-tool.png)
### 性能优化工具
#### Yslow
#### PageSpeen
#### WebPagetest
### 加载优化
#### vue的懒加载
### SEO优化


## 部署和打包
### gulp
### grunt
### webpack



**docute** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/docute/contributors)).
> [calamus.xyz](https://calamus.xyz) · GitHub [@calamus0427](https://github.com/calamus0427) 