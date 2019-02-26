# vue组件件通信的方法

## 总结
1. [Prop（常用）](#prop)

2. [$emit (组件封装用的较多)](#emit)

3. [.sync语法糖 （较少）](#-sync修饰符)

4. [slot和$refs](#slot和refs)

5. [Vuex](#vuex)

6. [$attrs 和 $listeners (组件封装用的较多)](#attrslisteners)

7. [provide 和 inject （高阶组件/组件库用的较多）](#provideinject)

8. [EventBus](#eventbus)

9. [$parent和$children](#parentchildren)

10. [$root](#root)

11. [$broadcast/dispatch](#broadcastdispatch)


## Prop
###### 父子组件通信
子组件接受父组件的传值通过设置props
```javascript
var ra_example = `<a class="ra_example" @click="sendMsgToParents">This is an {{msg}} </a>` ;
Vue.component("ra-example",{
    template:ra_example,
    props:{
        msg:{
            type:Number || String || Object || Boolean || Function || Array || Symbol,
            default:50,
            // required: true
            //自定义验证
            validator: function (value) {
                return value > 10
            },
            }
        },
    data(){
        return {
        }
    },
    methods:{
      sendMsgToParents(){
            this.$emit('getmul',this.multipleChipSelection);
        },
    },
});
```

## $emit
官方解释是触发当前实例上的事件。附加参数都会传给监听器回调。
$on：监听；$emit：触发
```javascript
this.$emit('func', data)
```

## .sync修饰符
在 vue@1.x 的时候曾作为双向绑定功能存在，即子组件可以修改父组件中的值。因为它违反了单向数据流的设计理念，所以在 vue@2.0 的时候被干掉了。但是在 vue@2.3.0+ 以上版本又重新引入了这个 .sync 修饰符。但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。说白了就是让我们手动进行更新父组件中的值了，从而使数据改动来源更加的明显。
#### 原理
```javascript
    <text-document v-bind:title.sync="doc.title"></text-document>

    <text-document
        v-bind:title="doc.title"
        v-on:update:title="doc.title = $event">
    </text-document>
    
```
#### 实际应用
```javascript


    <login :name.sync="userName"></login> {{ userName }}


    watch: {
        text (newVal) {
        this.$emit('update:name', newVal)
        }
    }

```

## slot和$refs
#### refs
```html
<base-input ref="usernameInput"></base-input>
```
```javascript
父组件中调用
methods: {
  // 用来从父级组件聚焦输入框
  focus: function () {
    this.$refs.usernameInput.func()
  }
}
```

#### slot
slot 内容分发：为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。


## Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。

## $attrs&$listeners
#### $attrs
<p class="info">
包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
</p>

#### $listeners
<p class="info">
包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
</p>

$attrs 和 $listeners 属性像两个收纳箱，一个负责收纳属性，一个负责收纳事件，都是以对象的形式来保存数据。看下面的代码解释：
父组件：
```html
    <div id="app">
        <child 
            :foo="foo" 
            :bar="bar"
            @one.native="triggerOne"
            @two="triggerTwo">
        </child>
    </div>
```
```javascript
data: {
    foo: 'parent foo',
    bar: 'parent bar'
  },
  components: {
    Child
  },
  methods: {
    triggerOne () {
      alert('one')
    },
    triggerTwo () {
      alert('two')
    }
  }
```
子组件：
```javascript
    props: ['foo'],
  created () {
    console.log(this.$attrs, this.$listeners)
    // -> {bar: "parent bar"}
    // -> {two: fn}
    // 这里我们访问父组件中的 `triggerTwo` 方法
    this.$listeners.two()
    // -> 'two'
  }
```

## provide&inject
<p class="info">
provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。并且这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
</p>

```javascript
<!-- 子组件 -->
inject: {
    house: {
      default: '没房'
    },
    car: {
      default: '没车'
    },
    money: {
      // 长大工作了虽然有点钱
      // 仅供生活费，需要向父母要
      default: '￥4500'
    }  
}
<!-- 父组件 -->
  provide: {
    house: '房子',
    car: '车子',
    money: '￥10000'
  }
```
<p class="error">
依赖注入还是有负面影响的。它将你的应用以目前的组件组织方式耦合了起来，使重构变得更加困难。同时所提供的属性是非响应式的。这是出于设计的考虑，因为使用它们来创建一个中心化规模化的数据跟使用 $root做这件事都是不够好的。如果你想要共享的这个属性是你的应用特有的，而不是通用化的，或者如果你想在祖先组件中更新所提供的数据，那么这意味着你可能需要换用一个像 Vuex 这样真正的状态管理方案了。
</p>


## EventBus
<p class="info">
适用于在多个兄弟组件或者叔侄组件间传递数据。思路就是声明一个全局Vue实例变量 EventBus ,把所有的通信数据，事件监听都存储到这个变量上。这样就达到在组件间数据共享了，有点类似于 Vuex。但这种方式只适用于极小的项目，复杂项目还是推荐 Vuex。
</p>

```javascript
<!-- 全局变量 -->
let EventBus = new Vue()
<!-- 子组件 -->
created () {
    console.log(EventBus.message)
    // -> 'hello'
    EventBus.$emit('received', 'from child')
}

<!-- 父组件 -->
  components: {
    Child
  },
  created () {
    // 变量保存
    EventBus.message = 'hello'
    // 事件监听
    EventBus.$on('received', function (val) {
      console.log('received: '+ val)
      // -> 'received: from child'
    })
  }
```

## $parent&$children
父实例，如果当前实例有的话。通过访问父实例也能进行数据之间的交互，但极小情况下会直接修改父组件中的数据。

## $root
当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。通过访问根组件也能进行数据之间的交互，但极小情况下会直接修改父组件中的数据。

## $broadcast/dispatch
他俩是 vue@1.0 中的方法，分别是事件广播 和 事件派发。虽然 vue@2.0 里面删掉了，但可以模拟这两个方法。可以借鉴 [Element](https://github.com/ElemeFE/element/blob/1.x/src/mixins/emitter.js#L14) 实现。有时候还是非常有用的，比如我们在开发树形组件的时候等等。
```javascript
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
    }

```