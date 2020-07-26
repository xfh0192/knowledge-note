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

2. DllPlugin DllReferencePlugin
    - https://webpack.js.org/plugins/dll-plugin/
    - 动态链接库
    - 作用：以一种能够极大提升构建效率的方式，分割bundle

3. 编写plugin时，需要了解compiler、compilation对象
    - https://webpack.js.org/contribute/writing-a-plugin/#creating-a-plugin
    - [compiler 编译器](https://webpack.js.org/api/node/#compiler-instance)
    - [Compilation](https://webpack.js.org/api/compilation-hooks/) - 能够访问一次编译的所有代码的模块实例

4. webpack构建流程
    - https://www.imweb.io/topic/59324940b9b65af940bf58ae
    - https://zhuanlan.zhihu.com/p/36445010

    从启动webpack构建到输出结果经历了一系列过程，它们是：
    - 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
    - 注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
    - 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
    - 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
    - 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
    - 输出所有chunk到文件系统。

    > 需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，比如UglifyJsPlugin会在loader转换递归完后对结果再使用UglifyJs压缩覆盖之前的结果。