1. 关联
2. 查询[query](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-upsert)

- upsert方法
  Insert or update a single row. An update will be executed if a row which matches the supplied values on either the primary key or a unique key is found

  更新的时候，必须对应有主键或者unique键，否则新增

1. 事务 transaction
  - 数据库操作中，每一步操作都是原子性的，互不关联的
  - 事务：一个事务，应该是独立的、不可分割的操作过程，执行要么成功要么失败。数据库的单步操作就是一个独立的事务
  - 但是存在场景，需要多步操作绑定到一起，全部成功才更新到数据库，否则放弃操作
  - 这个时候，需要将多步操作放到同一个事务中执行

2. 作用域 scope
3. 钩子 hook
