## 安装
### CDN引入
### npm 或 yarn
```bash
npm i --save ant-design-vue
# OR
yarn add ant-design-vue
```

## 项目中引入
- 全部引入
```js
//mian.js 
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```
- 按需引入
```javascript
//mian.js 
import Vue from 'vue';
import { Button, message } from 'ant-design-vue';
import App from './App';

Vue.config.productionTip = false;

/* v1.1.2 */
Vue.component(Button.name, Button);
Vue.component(Button.Group.name, Button.Group);

/* v1.1.3+ 自动注册Button下组件，如Button.Group */
Vue.use(Button);

Vue.prototype.$message = message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

## 使用
```vue
<a-button type="primary">Primary</a-button>
```

## 主题配置
- vue-cli3中配置
```javascript
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
            // less变量
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
}
```
- 配置 less 变量文件 覆盖
```javascript
// main.js
import '~ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import 'your-theme-file.less'; // 用于覆盖上面定义的变量
```

## 常用组件示例
### Button
```vue
<template>
    <div>
        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>
        <a-config-provider :autoInsertSpaceInButton="false">
        <a-button type="primary">按钮</a-button>
        </a-config-provider>
        <a-button type="primary">按钮</a-button>
        <a-button type="link">Link</a-button>
    </div>
</template>
```
![img](./img/ant-components/button.png)

### Layout
```vue
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>

```
![img](./img/ant-components/layout.png)

### 面包屑
```vue
<template>
  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>
```
![img](./img/ant-components/breadcrumb.png)

### form表单及一些输入组件
```vue
<template>
  <a-form>
    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <a-input id="error" placeholder="unavailable choice" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      validate-status="warning"
    >
      <a-input id="warning" placeholder="Warning" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <a-input id="validating" placeholder="I'm the content is being validated" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <a-input id="success" placeholder="I'm the content" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      has-feedback
      validate-status="warning"
    >
      <a-input id="warning2" placeholder="Warning" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Fail"
      has-feedback
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <a-input id="error2" placeholder="unavailable choice" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <a-date-picker style="width: 100%" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Warning"
      has-feedback
      validate-status="warning"
    >
      <a-time-picker style="width: 100%" />
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Error"
      has-feedback
      validate-status="error"
    >
      <a-select default-value="1">
        <a-select-option value="1">
          Option 1
        </a-select-option>
        <a-select-option value="2">
          Option 2
        </a-select-option>
        <a-select-option value="3">
          Option 3
        </a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Validating"
      has-feedback
      validate-status="validating"
      help="The information is being validated..."
    >
      <a-cascader :default-value="['1']" :options="[]" />
    </a-form-item>

    <a-form-item
      label="inline"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      style="margin-bottom:0;"
    >
      <a-form-item
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <a-date-picker style="width: 100%" />
      </a-form-item>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <a-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <a-date-picker style="width: 100%" />
      </a-form-item>
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="Success"
      has-feedback
      validate-status="success"
    >
      <a-input-number style="width: 100%" />
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
  },
};
</script>
```
![img](./img/ant-components/form.png)

### 折叠面板
```vue
<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" key="2" :disabled="false">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" key="3" disabled>
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
        activeKey: ['1'],
      };
    },
    watch: {
      activeKey(key) {
        console.log(key);
      },
    },
  };
</script>

```
![img](./img/ant-components/collapse.png)
