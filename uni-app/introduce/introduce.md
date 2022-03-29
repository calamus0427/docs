## 准备工作

### uni介绍
是一个使用`Vue`开发所有前端应用的框架，开发者编写一套代码，可发布多个平台。
#### 多端开发
一套代码编到14个平台
![unifor14.png](https://cdn.calamus.xyz/uni/unifor14.png)
##### 其他跨端框架对比
![compare.png](https://cdn.calamus.xyz/uni/compare.png)
### 优秀的小程序开发框架
即使不跨端， `uni-app` 也是很好的小程序开发框架
### 比原生的优势
- 精简的代码组织
- 更强大的组件化能力，官方封装了非常多组件
- 应用状态管理（类Vuex/Redux/Mobx等）
- 灵活支持各种 `Sass` 等css预处理器
- 完整的 ES Next 语法支持
- 支持云开发
- 性能优于原生（长列表加载等情形下对比）
- Hbuilder工具支持
- 社区支持
### 条件编译



## uni开发环境准备
### Hbuilder一键创建
#### 启动
打开Hbuilder ==》 新建项目（有很多模版可以选择）
![Hbuilder-start.jpeg](https://cdn.calamus.xyz/uni/Hbuilder-start.jpeg)
启动项目 ==》 如果启动失败检查下微信开发者设置和Hbuilder设置
![Hbuilder-error.jpeg](https://cdn.calamus.xyz/uni/Hbuilder-error.jpeg)
开发更改是实时预览的～打包发布都可以点击生成

#### 目录结构

```
┌─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意： 静态资源只能存放于此
├─uni_modules           存放uni_module规范的插件
├─wxcomponents          存放原生小程序组件的目录
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见  
```

[`uni_module`](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#%E4%BB%80%E4%B9%88%E6%98%AF-uni-modules)
uni-app的插件模块化规范，通常是对一组js sdk、组件、页面、uniCloud云函数、公共模块等的封装，用于嵌入到uni-app项目中使用，也支持直接封装为项目模板，也可以开发自己的插件使用。
uni_module和node_module不太一样，支持云函数，有付费插件的版权保护。可在[插件市场](https://ext.dcloud.net.cn/)下载需要的插件，也可以自己开发通过Hbuilder发布到插件市场。
`manifest.json`
使用小程序[插件](https://uniapp.dcloud.net.cn/tutorial/mp-weixin-plugin.html)：

```javascript
"mp-weixin": {
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wxidxxxxxxxxxxxxxxxx",
      "export": "index.js"
    }
  }
}
```


### vue-cli（个人喜好）
#### 启动

```bash
# 全局安装vue-cli
npm install -g @vue/cli@4
# 创建uni-app(对应Hbuilder最新的正式版）
vue create -p dcloudio/uni-preset-vue my-project
# 使用vue3版本
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
# 运行和发布
npm run dev:mp-weixin
npm run build:mp-weixin
```

#### 目录结构

```
┌─src            
│  └─components           符合vue组件规范的uni-app组件目录
│  │  ├─comp-a.vue         可复用的a组件
│  └─pages           可复用的a组件
│  │  ├─index
│  │  │ └─index.vue       index页面
├─static                本地静态资源
├─uni_modules           uni插件。
├─wxcomponents          存放小程序组件的目录
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见  
```

### 两种启动方式的差异
1. Hbuilder启动编译器会随着Hbuilder升级升级
2. 发布App还是需要Hbuilder操作，小程序等的发布均可
3. HBuilder对vue和uni-app的支持更友好：条件编译、图形化操作等



## uni与原生小程序 

### uni中使用原生小程序组件
[`wxcomponents`](https://uniapp.dcloud.io/tutorial/miniprogram-subject.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
支持在 App 和 小程序 中使用**小程序自定义组件**，从HBuilderX2.4.7起，H5端也可以运行微信小程序组件。如果想用于支付宝百度头条，则需要新建swancomponents等目录。虽然各小程序平台均支持自定义组件，但细节有差异，仍需自己测试。

比较妥善的跨端做法，是在uni-app插件市场寻找类似功能的vue组件，废弃之前的小程序自定义组件。比如把wx-charts换成ucharts、把wx-parser换成uparser。
（uni的处理其实是将该文件夹拷贝到dist目录下）
![wxcomponents.png](https://cdn.calamus.xyz/uni/wxcomponents.png)
**注意事项**
- 小程序组件需要放在项目特殊文件夹  `wxcomponents` （或 mycomponents、swancomponents）。HBuilderX 建立的工程  `wxcomponents`  文件夹在 项目根目录下。vue-cli 建立的工程  `wxcomponents`  文件夹在  `src`  目录下。可以在 [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)中自定义其他目录
-  当需要在  `vue`  组件中使用小程序组件时，注意在  `pages.json`  的  `globalStyle`  中配置  `usingComponents` ，而不是页面级配置。
-  注意组件使用时需要遵循vue语法，比如：数据和事件绑定的差异，应按照  `vue`  的数据和事件绑定方式
### 原生小程序转uniapp
[miniprogram-to-uniapp](https://ext.dcloud.net.cn/plugin?id=2656)
转换小程序做的工作有：
- setData全部转换为data（经测试，部分有遗漏，需要手动检漏）
- template 改为vue
- 生命周期内处理函数移植和对应（不完全匹配需要自行修改）
- ...
#### 原生小程序转uni-app细则
- app.json为pages.json，每个小程序page目录下的index.json添加到pages.json里
- globalData等全局变量或方法更改
- setData的处理
- 自定义组件，需要放到wxcomponents下
- wx api替换为uni api
关于js api中的 `wx.` ，不要全局替换为 `uni.` 。因为有的wx的api是微信独有的，替换为uni后，反而在微信下没法用了。替换可以自查下兼容性。
同时uni-app编译器提供了把 `wx.` 编译为不同平台的机制，所以直接使用 `wx.` 的api完全可以正常在各端运行。新代码api调用还是建议使用uni的，性能更优一些。
- selectComponent 更改为ref，虽然也支持，但是仅能在微信小程序端使用，不通用

```vue
  <template>
  <trtc-room ref="trtcComponent" id="trtc-component" :config="rtcConfig"></trtc-room>
  </template>

  // 微信小程序中组件通信
  this.trtcComponent = this.$mp.page.selectComponent('#trtc-component')
  // uni中
  this.trtcComponent = this.$refs.trtcComponent;
```

- 生命周期对应（应用生命周期、页面生命周期、组件生命周期（vue生命周期））



## uni开发
### 需要注意的常用vue语法坑
#### nextTick
- 在小程序自定义组件，如wxcomponents中使用。[wx.nextTick](https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html)延迟一部分操作到下一个时间片再执行。（类似于 setTimeout） 其他平台无此概念。
- [Vue.nextTick](https://cn.vuejs.org/v2/api/#Vue-nextTick)
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

#### [slot插槽](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)

```javascript
<view class="nav-content" >
     <slot />
</view>
```

![slot.png](https://cdn.calamus.xyz/uni/slot.png)


### 注意跨端组件兼容性
比如camera组件：
需要注意在各个平台的兼容性；
小程序开发中需要注意api表现是否一致
![camera.jpeg](https://cdn.calamus.xyz/uni/camera.jpeg)
uni-app非H5端，不支持使用svg标签。但image标签支持svg图片。

### 状态管理
1. 为什么需要做数据状态管理？
多页面切换，有一些公共设置变量
2. 最终方案
挂载在uni变量上

####  Vue.prototype

```javascript
Vue.prototype.baseUrl = 'http://uniapp.dcloud.io'; 
```

缺点：需要客户引入，增加接入成本
优点：全局调用更改方便

#### vuex
专为 Vue.js 应用程序开发的状态管理模式。
作为sdk开发缺点： 
1.  客户如果也使用了vuex，管理起来比较麻烦，需要多文件管理/命名空间等
2.  接入成本高
3.  没有那么多复杂的数据需要管理
4.  如果客户没有使用vuex，需要install vuex，增加包体

#### globalData
小程序中有个globalData概念，可以在 App 上声明全局变量。 Vue 之前是没有这类概念的，但 uni-app 引入了globalData概念，并且在包括H5、App等平台都实现了。
globalData绑定到页面，可在页面的onshow声明周期里进行变量重赋值

```javascript 
// App.Vue
<script>  
    export default {  
        globalData: {  
            text: 'text'  
        },  
        onLaunch: function() {  
          // 赋值：
					getApp().globalData.text = 'test'
					// 取值： 
					getApp().globalData.text
        },  
    }  
</script>  
```

存在的问题：
1. 需要挂在App.vue 上，增加客户接入成本
2. 命名问题，不能重复，全局调用问题
3. globalData不是响应式的，一个文件中对globalData的修改，不会动态的在另一个文件中响应
（如果想实现globalData的"响应"，你需要在onShow的生命周期中手动获取值，注意是onShow，比如页面间跳转onLoad等生命周期不一定会执行）

#### 挂载在uni上
实现：同挂在wx上一样，common方法， 挂在uni上，在需要的页面调用
存在的问题：多次调用有缓存
解决： 开始验证时初始化

```javascript
const setCmsConfig = (config) => {
  uni.faceidVerifySdkCmsConfig = config ;
}
```

##### 问题及解决
1. 命名不能重复（加专用前缀，防止冲突）
2. 多次调用缓存，需初始化

### vue2 和 vue3
迁移到 vue3，必须适配的几个点，vue2 项目才能正常运行在 vue3 上。
但如果用了vue3的语法，没办法在vue2中实现。

1.  模块导入导出

```javascript
// 导入
// 之前 - Vue 2, 使用 commonJS
var utils = require("../../../common/util.js");
// 之后 - Vue 3， 只支持 ES6 模块
import utils from "../../../common/util.js";
// 导出
// 之前 - Vue 2, 依赖如使用 commonJS 方式导出
module.exports.X = X;

// 之后 - Vue 3， 只支持 ES6 模块
export default { X };
```

2. 建议避免在同一元素上同时使用 v-if 与 v-for
3. 生命周期的变更
![vue23.png](https://cdn.calamus.xyz/uni/vue23.png)
4. Vue3 将不支持  `slot="xxx"`  的用法 ，使用  `v-slot:xxx`  用法。

	

## uni插件及社区
- dCloud插件市场
- 插件开发
- uniCloud：类似云开发

### 插件库
#### 常用插件库推荐
组件库选择原则：vue组件、小程序组件、跨端组件
- [uni-ui](https://uniapp.dcloud.io/component/uniui/uni-ui.html)
官方组件库，支持跨端
- [colorUI](https://ext.dcloud.net.cn/plugin?id=239) 
非常好看的UI库
- [uviewui](https://www.uviewui.com/)
功能丰富实用，尤其是内置样式和很多js，vuex，接口封装很完整

## 常用业务场景封装
- uni.request
注意uni.request和wx.request参数返回值差异比较大，不可直接更改。
- 自定义导航
先在pages.json中取消默认导航

```
{  
    "path" : "pages/index/index",  
    "style" : {  
        "navigationStyle":"custom"  
    }  
}
```

[uni.getSystemInfo(OBJECT)](https://uniapp.dcloud.io/api/system/info.html#getsysteminfosync)动态计算状态栏的高度；
内容使用slot的形式插入。
[uni.setNavigationBarTitle(OBJECT)](https://uniapp.dcloud.io/api/ui/navigationbar.html) 同微信，uni也提供了api修改导航栏设置
导航栏大概代码：

```javascript
<template>
<view class="fix-full-page">
  <view class="navigation-bar" :style="{height:height}">
    <view class="navigation-bar-fixed" :style="{height:height}">
      <view  class="navigation-bar-textbox" :style="{top:marginTop}">
        <view class="button-action" hover-class="button-action-active" @click="back_">
          <uni-icons type="left" size="20" color="white"></uni-icons>
        </view>
        <view v-if="config.showHomeBtn" class="button-action" hover-class="button-action-active" @click="home_">
          home
        </view>
      </view>
      <!-- title -->
      <view class="navigation-bar-title" :style="'margin-top:'+marginTop+';color:'+config.fontcolor">{{cmsConfig.justForJumpVer.title}}</view>
      <view class="navigation-bar-settings"></view>
    </view>
  </view>
  <view class="nav-content" :style="{height: contentHeight}">
     <slot />
  </view>
</view>

</template>

<script>
import uniIcons from "../uni-icons/uni-icons";
export default {
  components: {
    uniIcons
  },
  data() {
    return {
      cmsConfig: uni.faceidVerifySdkCmsConfig
    };
  },
  computed: {
    contentHeight(){
      return `calc(100% - ${this.height});`
    },
    height() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      return statusBarHeight  + "px";
    },
    marginTop() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      return statusBarHeight + "px";
    }
  },
  methods: {}
};
</script>

```

[--status-bar-height](https://uniapp.dcloud.io/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F)uni提供了css变量系统状态栏高度来自定义导航栏，方便不用计算。此变量在微信小程序环境为固定  `25px` ，在 App 里为手机实际状态栏高度。
![css变量.jpeg](https://cdn.calamus.xyz/uni/cssvar.jpeg)
使用css变量优化：

```vue
	<view class="status-contents">  
		 <view class="status top-view"></view>  
		<view class="title" style="height: 88px;">
			<text>导航栏</text>
		</view>
	</view>
      .status-contents{  
           height: calc(var(--status-bar-height) + 88px);  
       }  
    .top-view{  
          width: 100%;  
          position: fixed;  
          top:0;  
    }  
    .status{  
          height:var(--status-bar-height);  
    }
    .title{
         width: 100%;  
         position: fixed;  
         top: var(--status-bar-height);  
    }

```

- message全局

	```javascript
		const config = require('../config.js')

		var message = {
			toast(title, type = 'text') {
				uni.showToast({
					title,
					icon:type
				})
			},
			confirm(title, confirmColor) {
				return new Promise((res, rej) => {
					uni.showModal({
						title,
						cancelColor: '#b6b6b6',
						confirmColor: confirmColor || config.modalColor,
						success: (result) => {
							if (result.cancel) {
								rej(result)
							} else if (result.confirm) {
								res(result)
							}
						}

					})
				})
			},
			async message(content, confrimText) {
				return new Promise((res) => {
					uni.showModal({
						title: '提示',
						content,
						showCancel: false,
						confirmColor: config.modalColor,
						success: (result) => {
							res(result)
						}
					})
				})
			}
		}
		module.exports = message

	```

	调用示例

	```javascript
		this.message.toast('你好')
	```

- globalConfig自定义配置

```
export default  {
  normalPath: ''	//	sdk路径配置
}
```



## 遇到的问题
- 原生组件异步渲染
[uni.createCameraContext()](https://uniapp.dcloud.io/api/media/camera-context.html#createcameracontext)
camera组件用v-if控制了显隐，显示时异步加载未完成就执行startRecord
解决思路1: position:fixed;left:100%;
解决思路2：camera相机初始化完成时binddone中执行后续操作
![camera-bind.jpeg](https://cdn.calamus.xyz/uni/camera-bind.jpeg)

- 页面栈10次跳转，超出了将无法打开其他页面
#### 页面跳转方法
- `uni.navigateTo` 保留当前页面，跳转到应用内的某个页面
打开新页面，新页面入栈
- `uni.redirectTo` 关闭当前页面，跳转到应用内的某个页面。
当前页面出栈，新页面入栈
- `uni.reLaunch` 关闭所有页面，打开到应用内的任意页面。
页面全部出栈，只留下新的页面
- `uni.switchTab` 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
切换tab页面，页面全部出栈，只留下新的 Tab 页面
- `uni.navigateBack` 关闭当前页面，返回上一页面或多级页面。
返回，页面不断出栈，直到目标返回页
**注意**
-  `navigateTo` ,  `redirectTo`  只能打开非 tabBar 页面。
-  `switchTab`  只能打开  `tabBar`  页面。
- 不能在  `App.vue`  里面进行页面跳转
#### [`getcurrentpages`](https://uniapp.dcloud.io/api/window/window.html#getcurrentpages)
获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
当前解决方案：
谨慎使用navigateTo、navigateBack，无需保存页面历史的redirectTo




## 参考资料
- [小程序开发：用原生还是选框架（wepy/mpvue/taro/uni-app）](https://ask.dcloud.net.cn/article/35947)
- [uni-app黑魔法：小程序自定义组件运行到H5平台](https://ask.dcloud.net.cn/article/37086)
- [Vue3 对比 Vue2.x 差异性、注意点、整体梳理](https://juejin.cn/post/6892295955844956167#heading-9)
- [DCloud插件开发指南汇总](https://ask.dcloud.net.cn/article/35408)