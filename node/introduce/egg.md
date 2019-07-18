# egg
Egg.js 为企业级框架和应用而生

## egg koa express 等的对比
- Express 是 Node.js 社区广泛使用的框架，简单且扩展性强，非常适合做个人项目。但框架本身缺少约定，标准的 MVC 模型会有各种千奇百怪的写法。Egg 按照约定进行开发，奉行『约定优于配置』，团队协作成本低。
- Sails 是和 Egg 一样奉行『约定优于配置』的框架，扩展性也非常好。但是相比 Egg，Sails 支持 Blueprint REST API、WaterLine 这样可扩展的 ORM、前端集成、WebSocket 等，但这些功能都是由 Sails 提供的。而 Egg 不直接提供功能，只是集成各种功能插件，比如实现 egg-blueprint，egg-waterline 等这样的插件，再使用 sails-egg 框架整合这些插件就可以替代 Sails 了。
- Koa 是一个非常优秀的框架，然而对于企业级应用来说，它还比较基础。而 Egg 选择了 Koa 作为其基础框架，在它的模型基础上，进一步对它进行了一些增强。

## 起步

### 上手

```bash
# 安装
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm i
# 启动
$ npm run dev
$ open http://localhost:7001
```


## 踩坑记录

