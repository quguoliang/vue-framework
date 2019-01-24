# my-framework 自定义框架

### 简介
本框架主要是一个vue框架，做了一些基本配置以及封装，可以减少大部分操作

### 系统结构

* public
* src
    * assets  //静态资源
        * fonts
        * images
        * styles
    * components //组件库
        * message //全局消息提示
        * requestLoading //加载动画
        * svgIcon //全局icon
    * icon //icon库
        * svg //svg图存放库
    * minix //存放重叠逻辑
    * provider //服务接口调用
        * api
        * request.js
    * routers //vue-router
    * stores //vuex
        * modules
        * getter.js
        * store.js

    * utils //工具文件
    * views //页面入口
        * Index.vue
        * 404.vue
        * ......
### 如何开始
    首先在src/views下面新增一个页面，例如新建一个Haha.vue,然后router会自动为你新建的页面配备路由。但是若你需要配置子路由时，请进入router.js进行手动配置。

    一般会把views下面的文件，作为一个页面的入口的文件，页面一般都采用组件化的开发，页面的其他子组件，一般都会放到src/components下面去。

    provider文件主要是与后端进行交互的，本框架主要是用的axios，request.js已经进行了axios配置，一般不需要处理，与正常Axjx一样使用即可（为啥多说这一句，就是返回数据的时候res.data就行了别调两个data），需要处理的接口放在api文件下，这样比较清楚，也方便更改。

    utils文件主要是放一些全局的可调用的文件，比如已经写好的auth.js、permission.js，基本不需要改，有需要自行更改，需要全局过滤器可以在filters.js中定义，已经做好调用了，写完即生效:),如果还需要其他工具，可自行添加文件。

    minix文件主要是用来解决逻辑重复的问题的，可以自定义一些逻辑，然后做组件混合，如果不理解可以不用管:)

### css预处理器
    scss

### icon图标
    本框架封装了一个全局的icon组件<svg-icon>,需要的调用图标时请直接调用。（从www.iconfont.cn下载svg图标放入src/icon/svg文件下，然后即可。）

    <svg-icon>组件需要两个参数，iconName和iconClass（字符串格式），iconName为必要参数，参数值为你需要调用的图标名；iconClass不必要，但当你需要更改svg图标的样式时请传入这个值，在你当前的组件style中编写你想要的svg图标样式，然后把样式名传入iconClass即可。

### message全局消息提示
    框架封装了一个message消息提示，不管你在任何地方通过this.$message("")即可调用，

    参数类型：this.$message("")或者this.$message({content: String, timeOut: Number, isClose: bool, type: String}),第二种方式传参可以传一个或者多个，但是参数类型不能错。

    注意：type类型包括普通消息info、成功消息success、警告消息warning、错误消息error，默认为info。四种类型不能写错，错了我不管:)

### loading加载
    封装了一个加载组件，方法请求时候会自动调用，具体我没试过，请自行实验:)

### eslint规则
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    "valid-jsdoc": [2, { // jsdoc规则
        "requireParamDescription": true,
        "requireReturnDescription": true
    }],
    "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
    "space-infix-ops": [2, {"int32Hint": true}], //操作符周围的空格
    "curly": 1, // 必须使用 if(){} 中的{}
    "no-extra-semi": 0, // 可以多余的冒号
    "semi": 0,  // 语句可以不需要分号结尾
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明

    规则不全，有需要自行添加:)

### prettier规则
    "printWidth": 140,
	"tabWidth": 4,
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "es5",
	"semi": true,
	"bracketSpacing": true,
	"jsxBracketSameLine": true


### 单元测试
    本框架并未涉及单元测试，如有需要请自行添加

### 编译部署
    并未涉及，以后会补充:)

### 运行与构建
    "build": "vue-cli-service build",
    "test": "vue-cli-service serve --project-mode test",
    "lint": "vue-cli-service lint",
    "build:dev": "vue-cli-service build --project-mode dev",
    "build:pre": "vue-cli-service build --project-mode pre",
    "build:pro": "vue-cli-service build --project-mode pro",
    "build:test": "vue-cli-service build --project-mode test",
    "dev": "vue-cli-service serve --project-mode dev",
    "pre": "vue-cli-service serve --project-mode pre",
    "pro": "vue-cli-service serve --project-mode pro"

    本框架用的是yarn包管理器（别问我为什么，因为当时npm创建有问题，况且yarn也很好用，个人感觉yarn加载的时候更好看:)...）

    框架可能不完善（因为我没用过:),有问题可以自行解决，最好也给我讲讲...蟹蟹）
    
    读完了，运行yarn dev，走你......:)




