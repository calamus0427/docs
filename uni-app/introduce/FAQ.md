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



