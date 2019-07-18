# egg-sequelize

## postGreSQL

### 安装和启动

```bash
# 下载
brew install postgresql
# 初始化
initdb /usr/local/var/postgres
# 创建数据库
createdb
# 登陆
psql
```

### 常用控制台指令

```bash
\password：设置当前登录用户的密码
\h：查看SQL命令的解释，比如\h select。
\?：查看psql命令列表。
\l：列出所有数据库。
\c [database_name]：连接其他数据库。
\d：列出当前数据库的所有表格。
\d [table_name]：列出某一张表格的结构。
\du：列出所有用户。
\e：打开文本编辑器。
\conninfo：列出当前数据库和连接的信息。
\password [user]: 修改用户密码
\q：退出
```

### 基本操作命令

#### 创建和删除数据库用户

```bash
# 创建user1用户：
CREATE USER user1 WITH PASSWORD 'XXXX'
# 查看数据库用户列表：
\du
# 删除数据库用户：
drop user user1;
```

#### 创建和删除数据库

```bash
# 创建数据库：
create database testdb;

# 查看数据库列表：
\l

# 删除数据库：
drop database db1;
```

#### 创建和删除数据表

```bash
# 选择数据库：
\c DatabaseName

# 创建数据库表：
CREATE TABLE COMPANY( ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, AGE INT NOT NULL, ADDRESS CHAR(50), SALARY REAL);

# 删除数据库表：
drop table company;

# 查看数据库信息：
\d

# 查询数据：
select * from company
```

### 可视化工具

- DBeaver 
注意：新建连接的时候选择 PostgreSql(Generic)


## egg-sequelize

### 安装配置

#### 安装

```bash
npm install --save egg-sequelize
```

#### 配置

```js
// 在 config/plugin.js 中引入 egg-sequelize 插件
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
// 在 config/config.default.js 中编写 sequelize 配置
config.sequelize = {
  dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
  host: '127.0.0.1',
  port: 5432, //postgres 默认端口5432
  database: '',
  username: 'root',
  password: '',
  define: {
      freezeTableName: false,
      underscored: true,
    },
};
```

#### 设置数据库模型

```js
//  {workplace}/model/Compony.ts
export default  (app)=> {
    const { FLOAT, INTEGER,TEXT,CHAR,DATE} = app.Sequelize;

    const Compony = app.model.define('company', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: TEXT,
        age: INTEGER,
        address:CHAR,
        salary:FLOAT,
        created_at: DATE,
        updated_at: DATE,
    });

    return Compony;
}
```

#### 功能示例

``` js
// {workplace}/service
export default class Compony extends Service {
  public async getlist(name: string,age: number) {
    const { ctx } = this;
    const company = await ctx.model.Compony.findAll(
      {
        where: {name,age}
      }
    )
    return company
  }
  public async addCompony(name: string,age: number) {
    const { ctx } = this;
    const id = 3
    const company = await ctx.model.Compony.create(
      {
        name,age,id
      }
    )
    let result = new Object({header:ctx.response,body:company})
    return result
  }
}
```


### 踩坑记录

1. post会自动生成created_at: DATE,updated_at: DATE
（ 这两列数据，数据库必须有对应的，如何设置不自动创建这个还不知道233
