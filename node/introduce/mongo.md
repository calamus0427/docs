# egg-mongoose

## mongo
### 本地安装

```bash
# 安装
brew install mongodb

# 启动
# 在要启动的目录下新建一个目录
mkdir data
mongod --dbpath='./data'
# 注意：这个命令窗体绝对不能关,关闭这个窗口就相当于停止了mongodb服务


```

### 基本操作命令
#### 数据库操作
##### 查看所有数据库
```bash
show dbs
```

##### 使用数据库
```bash
use dbname
# 返回 :switched to db school
```

##### 查看当前使用的数据库
```bash
db
db.getName()
```

##### 插入数据
```bash
db.dbname.insert({name:'为民小学',age:10});
```

##### 删除数据库
```bash
db.dropDatabase()
```

#### 集合操作
##### 查看集合帮助
```bash
db.dbname.help()
```

##### 查看数据库下的集合
```bash
show collections
```

##### 创建集合
```bash 
db.createCollection('collection_Name')
```

#### 文档操作
##### 插入一个文档
```bash
db.collection_Name.insert(document)
```

##### 插入/保存文档
```bash
# 每当插入一条新文档的时候mongodb会自动为此文档生成一个_id属性,_id一定是唯一的
# 用来唯一标识一个文档 _id也可以直接指定，但如果数据库中此集合下已经有此_id的话插入会失败。
# _id存在则修改，不存在则添加
db.collection_name.save(document)
```

##### 更新文档
```bash
db.collection.update(
   <query>,
   <updateObj>,
   {
     upsert: <boolean>,
     multi: <boolean>
   }
)
```

##### 查询文档
```bash
db.collection_name.find(query, projection)；
# 只返回匹配到的第一条文档
db.collection_name.findOne()(query, projection)；
# 分页查询
db.collectoin_name.find().limit(number)
# 跳过指定数量的数据
db.collectoin_name.find().skip(number)
# 通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1为升序排列，而-1是用于降序排列。
db.collectoin_name.find().sort({field:1})
```

### 可视化工具

- Robo 3T

## egg-mongoose

### 安装配置

#### 安装

```bash
npm install egg-mongoose --save
```

#### 配置

```js
// 改变Egg项目中的配置文件{workplace}/config/plugin.js中来启用 egg-mongoose
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
# {workplace}/config/default.js配置项config添加属性
config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/website',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };
```

#### 设置数据库模型

```js
//  {workplace}/model/Page.ts
export default  (app)=> {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // const conn = app.mongooseDB.get('mrk')
  
    const UserSchema = new Schema({
      sysType:{ type: Number },
      userAccount: { type: String },
      userPassword: { type: String }
    });
  
    return mongoose.model('Page', UserSchema);
}
```

##### 数据类型

| 数据类型 | -- |
| -- | -- |
| Number | 数字 |
| String | 字符串 |
| Boolean | 布尔值 |
| ObjectId | 对象ID |
| Array | 数组 |
| Date | 日期 |
| Buffer | 二进制 |
| Mixed | 混合类型 |

#### 功能示例

```ts
// {workplace}/service
export default class Example extends Service {
  public async login(sysType: number,userAccount: string,userPassword: string) {
    const { ctx} = this ;
    const userData = await ctx.model.Page.find({
      sysType:sysType,
      userAccount: userAccount,
      userPassword: userPassword
    }) ;
    if (userData.length !== 0) {
      return userData
    }else{
      return 'error'
    }
  };
  public async createUser(sysType: number,userAccount: string,userPassword: string) {
    const { ctx } = this ;
    let result = await ctx.model.Page.create({
      sysType:sysType,
      userAccount: userAccount,
      userPassword: userPassword}
      )
      return result ? result : 'add success'
  }
}
```

##### 其他语句示例
```js
// 获取所有数据
this.ctx.model.Page.find()
// 获取查到的第一个数据
this.ctx.model.Page.findOne()
// 条件查询
this.ctx.model.Page.find(conditions,callback);
// 删除数据
this.ctx.model.Page.remove(conditions,callback);
// 更新数据
this.ctx.model.Page.update(conditions, update, callback)
// 排序（sort）
this.ctx.model.Page.sort({ isSetTop: -1, sort: 1, editTime: -1 });
// 限制返回结果的数量（limit）
this.ctx.model.Page.limit(3);
// 跳过前3个文档,返回其余的（skip）
this.ctx.model.Page.skip(3);

```