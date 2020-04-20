
# sequelize的模型关联关系

sequelize也是用了好一段时间，但是基本上写业务的时候，表之间的关联都是简单的**1:1**。但是最近碰到管理系统的组织架构+权限管理的开发需求，仔细梳理后发现充满了各种**1:n**和**m:n**关系，只好认真调试了一波。。理清怎么写

## 外键关联

Sequelize 中的模型存在多种关系。

在一个User.hasOne(Project)形式的调用中，

- 正在调用的模型User是源模型
- 而做为参数被传入的模型Project是目标模型

```
我的记忆方法：
1. belong的方法，关联外键会加到（前面的）源模型上
2. has的方法，关联外键会加到（后面的）目标模型上
```

## 关系/关联的使用

### 一对一关联

一对一关联是由一个单一的外键，实现两个模型之间的精确关联。

#### belongsTo

BelongsTo关联表示一对一关系的外键存在于源模型。

如，下例中Player是通过外键关联的Team的一部分：

```
var Player = this.sequelize.define('player', {/* attributes */})
  , Team  = this.sequelize.define('team', {/* attributes */});

Player.belongsTo(Team); // 会为Player添加一个teamId 属性以保持与Team 主键的关系
```

##### 外键 foreignKey

默认情况下，一个属于关系的外键将从目标模型的名称和主键名称生成。

默认命名使用驼峰式命名，而在源模型中添加了underscored: true配置，将使用蛇型命名。

##### 目标键 targetKey

目标键是位于目标模型上通过源模型外键列指向的列。默认情况下，目标键是会belongsTo关系中目标模型的主键。要使用自定义列，请用targetKey选项来指定

#### hasOne

HasOne关联表示一对一关系的外键存在于目标模型。

---

#### 使用belongsTo（或hasOne）建立关联

【注意】经过调试，首先需要说明：其实用belongsTo或者hasOne没有什么太大差别。。只要搞清楚关联后外键存在哪个表就够了，因此1对1关联我都是用的belongsTo，避免混淆

调试例子：（例子中开启了underscored: true，字段名都是用蛇形命名）

```
1. 先创建了两个表，分别有模型
var user = this.sequelize.define('user', {
    id, name, tid
})
var trainer = this.sequelize.define('trainer', {
    id, name, uid
})

2. 创建关联

// 1对1关联，以trainer.uid作为外键（需要自行在trainer表中定义），关联到user表的id
trainer.belongsTo(user, {
    targetKey: 'id',
    foreignKey: 'uid',
})
// 1对1关联，以user.tid作为外键（需要自行在user表中定义），关联到trainer表的id
user.belongsTo(trainer, {
   targetKey: 'id',
   foreignKey: 'tid',
   // as: 'train',  模型名
})

3. 编写业务逻辑时，进行关联的插入
user.create({
   name: 'a1',
   trainer: { name: 'bbb1' }
}, {include: [
       { model: trainer, /* as: 'train' 假如关联中定义了as */ }
   ]
})

trainer.create({
   name: 'a2',
   user: { name: 'bbb2' }
}, {include: [
       { model: user }
   ]
})

```

创建结果

user：

id|name|tid
---|---|---
1|bbb2|NULL
2|a1|1

trainer: 

id|name|uid
---|---|---
1|bbb1|NULL
2|a2|1

> 同时也能看出创建数据是从内到外的

### 一对多关联

One-To-Many关联是指一个源模型连接多个目标模型。反之目标模型都会有一个明确的源。

```
var User = sequelize.define('user', {/* ... */})
var Project = sequelize.define('project', {/* ... */})
 
// 定义 hasMany 关联
Project.hasMany(User, {as: 'Workers'})
```

会向 User 中添加一个projectId或project_id属性。Project 的实例中会有访问器getWorkers 和 setWorkers。这是一种单向关联方式。

调试例子：

```
1. 创建模型
var user = this.sequelize.define('user', {
    id, name
})
var trainer = this.sequelize.define('trainer', {
    id, name, uid
})

2. 创建关联
user.hasMany(udept, {
   foreignKey: 'uid',
})

3. 创建数据的业务逻辑
user.create({
   name: 'a',
   // 注意这里是复数，而且建议表名称不要以s结尾，否则这里会出错
   udepts: [
       {name: 'bbb'},
       {name: 'ccc'}
   ]
}, {
   include: [
       {model: this.app.seqIns.udept}
   ]
})
```

> 注意创建关联实例的时候，key是复数形式，因此建议表名称不要以s结尾，否则会识别不到造成问题

创建结果

user：

id|name|tid
---|---|---
1|a|NULL

udept: 

id|name|uid
---|---|---
1|bbb|1
2|ccc|1

### 多对多关联

Belongs-To-Many 关联是指一个源模型连接多个目标模型。而且，目标模型也可以有多个相关的源。

```
Project.belongsToMany(User, {through: 'UserProject'});
User.belongsToMany(Project, {through: 'UserProject'});
UserProject = sequelize.define('userProject', {
    userId, projectId
})

User.belongsToMany(Project, { through: 'UserProject', foreignKey: 'userId' })
Project.belongsToMany(User, { through: 'UserProject', foreignKey: 'projectId' })
```

多对多关联需要有一张中间表，这里的UserProjects就是中间表

调试例子：

```
1. 创建模型
var user = this.sequelize.define('user', {
    id, name
})
var upose = this.sequelize.define('upose', {
    id, name
})
// 中间表
var uconn = this.sequelize.define('uconn', {
    id, uid, pid,
})

2. 建立关联
user.belongsToMany(upose, {
    // 设定中间表
   through: {
      model: uconn,
   },
   // 中间表中设置指向源模型的外键
   foreignKey: 'uid',
   // 中间表中设置指向目标模型的外键
   otherKey: 'pid',
})
upose.belongsToMany(user, {
   through: {
      model: uconn,
   },
   foreignKey: 'pid',
   otherKey: 'uid',
})

3. 插入数据
this.app.seqIns.user.create({
   name: 'a123',
   // s结尾的表名会坑。。注意不要用s结尾的表
   uposes: [
       {name: 'bbb123'},
       {name: 'ccc123'}
   ]
}, {
   include: [
       {model: this.app.seqIns.upose}
    ]
})
```

创建结果

user：

id|name
---|---
1|a123

upose: 

id|name
---|---
1|bbb123
2|ccc123

uconn:

id|uid|pid
---|---|---
1|1|1
2|1|2

### 1:n n:m

调试例子：

```
1. 创建模型
var trainer = this.sequelize.define('trainer', {
    id, name, uid
})
var user = this.sequelize.define('user', {
    id, name
})
var upose = this.sequelize.define('upose', {
    id, name
})
// 中间表
var uconn = this.sequelize.define('uconn', {
    id, uid, pid,
})

2. 创建关联
// 1:m
ehrHumanResModelsIns.trainer.hasMany(ehrHumanResModelsIns.user, {
  foreignKey: 'tid',
})
//  n:m
ehrHumanResModelsIns.user.belongsToMany(ehrHumanResModelsIns.upose, {
  through: {
      model: ehrHumanResModelsIns.uconn,
  },
  foreignKey: 'uid',
  otherKey: 'pid',
})
ehrHumanResModelsIns.upose.belongsToMany(ehrHumanResModelsIns.user, {
  through: {
      model: ehrHumanResModelsIns.uconn,
  },
  foreignKey: 'pid',
  otherKey: 'uid',
})

3. 插入逻辑
// 1:n n:m
trainer.create({
   name: 'trainer1',
   // s结尾的表名会坑。。注意不要用s结尾的表
   users: [
       {name: 'user1', uposes: [{name: 'upose1'}]},
       {name: 'user2', uposes: [{name: 'upose2'}]},
   ]
}, {
   include: [
       {
           model: user,
           include: [{model: upose}]
       }
   ]
})
```

创建结果

trainer：

id|name
---|---
29|trainer1

user：

id|name|tid
---|---|---
64|user1|29
65|user2|29

upose: 

id|name
---|---
40|upose1
41|upose2

uconn:

id|uid|pid
---|---|---
1|64|40
2|65|41

至此，sequelize中各种关联怎么创建算是实实在在实践了一轮，算是满足需求中各种关联关系的需要了。

后面会整理一下**事务**的使用，事务也是一个很重要的功能，开发中必须要使用的

---

refer:

- https://itbilu.com/nodejs/npm/41qaV3czb.html
- https://sequelize.org/v5/manual/associations.html