# 阿里监控

是面向所有 Node.js 应用提供 性能监控、安全提醒、故障排查、性能优化 等服务的整体性解决方案，提供完善的工具链和服务，协助开发者快速发现和定位线上问题。

## 安装配置

### 安装

```bash
npm i egg-alinode --save
```

### 配置

```js
// /config/plugin.js
exports.alinode = {
    enable:true,
    package:'egg-alinode',
},
// config/config.default.js
exports.alinode = {
  enable: true,
  appid: '***',  // Node.js 性能平台给您的项目生成的 appid
  secret: '***',  // Node.js 性能平台给您的项目生成的 secret
  logdir: '***',  //可选，Node.js 性能平台日志输出地址绝对路径，与 NODE_LOG_DIR 保持一致。如：/tmp/，也可以不写
  error_log: [
    // '您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个',
    // '例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log',
    // '不更改 Egg 默认日志输出路径可不配置本项目',
  ],// 可选
  agentidMode:'IP',  // 可选，如果设置，则在实例ID中添加部分IP信息，用于多个实例 hostname 相同的场景（以容器为主）
};

```

## 访问阿里控制台
控制台地址 [node.console.aliyun.com](node.console.aliyun.com)