## 性能优化

webpack 配置：
1. 缩小loader作用范围。include、exclude
2. 优化resolve.modules配置。用于配置webpack定位第三方依赖的位置
3. alias 别名。
4. extensions 后缀列表。
5. output.publicPath 输出的静态资源 前缀url路径，用于定位cdn。假如公司有自己的cdn服务器
6. mini-css-extract-plugin 插件 分离css文件，便于利用html缓存策略
    - style-loader 向html中直接插入style标签
    - 因此对css文件处理的loader中需要先去掉style-loader
7. hash chunkhash contenthash
    - **hash** 变更于每一次构建。作用于js、css，**图片的hash不受影响**。
    - **chunkhash** 以chunk为单位，当这个chunk里的模块发生改变，则重新计算hash（多入口打包会发现区别）
    - **contenthash** 依赖于文件自身内容，计算hash
    - 主要是依赖内容的范围不一样，js较适合chunkhash，css较适合contenthash，image不会受影响

--- 

## 其他

1. hash chunkhash contenthash 区别
    - hash 每次编译的hash都不一样，不利于缓存
    - chunkhash
    - contenthash 依赖于文件内容做hash