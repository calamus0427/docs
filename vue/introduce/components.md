## 组件开发三要素
Vue组件的API主要包含三部分：prop、event、slot
- props 表示组件接收的参数，最好用对象的写法，这样可以针对每个属性设置类型、默认值或自定义校验属性的值，此外还可以通过type、validator等方式对输入进行验证
- event是子组件向父组件传递消息的重要途径
- slot可以给组件动态插入一些内容或组件，是实现高阶组件的重要途径；当需要多个插槽时，可以使用具名slot

## 开发组件
### 组件注册
1. 全局注册
```vue
Vue.component("simple-component", {
        template: "<span>我是一个最简单的Vue组件示例</span>"
})
```

2. 局部组册
```vue
<template>
    <component-a></component-a>
    <!-- 动态组件 -->
    <component v-bind:is="currentTabComponent"></component>
</template>

<script>
    import ComponentA from './ComponentA.vue'

    export default {
    components: {
        ComponentA
    },
    // ...
    }
</script>
```

### props 组件传值
#### 类型检测
type：
- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol
```javascript
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']

props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

### event事件
```js
this.$emit('myEvent',params)
```

### slot插槽
将 <slot> 元素作为承载分发内容的出口。
作为后备内容，我们可以将它放在 <slot> 标签内。
```vue
// 使用
<navigation-link url="/profile">
  Your Profile
</navigation-link>
// 组件中
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot>Submit</slot>
</a>
```

#### 具名插槽
<slot> 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽：
```vue
// 组件中
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
```vue
// 调用
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```