Vue 修饰符

## 事件修饰器
Vue.js 为 v-on 提供了 事件修饰符。通过由点(.)表示的指令后缀来调用修饰符。</br>
修饰符可以串联。

### .stop
阻止单击事件冒泡

### .prevent
提交事件不再重载页面

### .capture
添加事件侦听器时使用时间捕获模式

### .self
只当事件在该元素本身（而不是子元素）触发时触发回调

## 按键修饰符
在监听键盘事件时，我们经常需要监测常见的键值。 Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```html
    <input @keyup.enter="submit">
```

全部的按键别名：
- enter
- tab
- delete (捕获 “删除” 和 “退格” 键)
- esc
- space
- up
- down
- left
- right
```javascript
// 可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
// 可以使用 v-on:keyup.f1
Vue.config.keyCodes.f1 = 112

```

## v-model修饰符

### 懒加载 .lazy
在离开input时才更新输入的内容，在v-model后加上.lazy即可。

### 限定输入数字.number
```html
<input type="text" v-model.number="name" value="name">
```

### 去掉空字符.trim
```html
<input type="text" v-model.trim="name" value="name">
```
缺点：只能去掉输入框改变时的前后空字符