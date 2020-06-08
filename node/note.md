1. 操作对象
   - os 操作系统
   - process 进程
   - fs 文件系统
   - net 网络通讯

2. 运行、调试、模块
   - 命令行
   - nodemon 监视代码修改，自动重启
     ```
       npm install -g nodemon
       nodemon index.js
     ```
   - vscode 断点debug
   - 【推荐】单元测试 jest
      ```
        npm install jest -g

        test("Hello world", () => {
          require('../index')
        })

        jest helloworld
      ```

3. 测试代码生成工具
    