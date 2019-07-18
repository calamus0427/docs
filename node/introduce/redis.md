# egg-redis

## 安装配置

### 安装

```bash
npm i egg-redis --save
```

### 配置

```js
//${app_root}/config/plugin.js
exports.redis = {

  enable: true,

  package: 'egg-redis',

};
// ${app_root}/config/config.default.js
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  }
}
```
