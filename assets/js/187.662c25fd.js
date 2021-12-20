(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{754:function(e,s,n){"use strict";n.r(s);var a=n(58),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"使用命令行工具-poweshell-使用node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用命令行工具-poweshell-使用node"}},[e._v("#")]),e._v(" 使用命令行工具: poweShell 使用node")]),e._v(" "),n("h2",{attrs:{id:"js中存在两大问题-文件依赖和命名冲突"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js中存在两大问题-文件依赖和命名冲突"}},[e._v("#")]),e._v(" js中存在两大问题,文件依赖和命名冲突")]),e._v(" "),n("p",[e._v("node.js中规定一个js文件就是一个模块,模块内部定义的变量和函数,默认情况下,外部无法访问"),n("br"),e._v("\n模块内部可以使用exports对象进行成员导出,使用require导入")]),e._v(" "),n("h2",{attrs:{id:"导出成员-exports和module-exports-都可以-已module-exports为准"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导出成员-exports和module-exports-都可以-已module-exports为准"}},[e._v("#")]),e._v(" 导出成员,exports和module.exports 都可以,已module.exports为准")]),e._v(" "),n("h2",{attrs:{id:"系统模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统模块"}},[e._v("#")]),e._v(" 系统模块")]),e._v(" "),n("h3",{attrs:{id:"文件模块-fs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件模块-fs"}},[e._v("#")]),e._v(" 文件模块 fs")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    fs.readFile(文件路径,[文件编码],回调函数)\n        回调函数中有2个形参 err和doc err为null 说明读取成功 err为一个对象说明读取失败\n        doc就是读取的文件内容\n    writeFile(文件名(路径),写入的数据,回调函数)\n        写入文件不存在会自动创建\n        err为null说明写入成功\n")])])]),n("h3",{attrs:{id:"路径模块-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路径模块-path"}},[e._v("#")]),e._v(" 路径模块 path")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    path.join(路径,路径,路径...) 路径拼接\n    在node中使用绝对路径\n    在node中的相对路径大多数时候是相对于命令行执行目录的\n    使用__dirname 可以获取当前文件的绝对路径\n    require中的相对路径是相对文件的\n")])])]),n("h2",{attrs:{id:"第三方模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块"}},[e._v("#")]),e._v(" 第三方模块")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("通常由多个文件组成的文件夹,又名包\n有2中存在方式,已JS库形式,已命令行工具形式\nnpmjs.com 第三方模块储存和分发的仓库\nnpm : node package manage node第三方管理工具\n使用npm下载第三方模块\n    npm install 模块名 默认下载到命令行执行目录\n    分为全局安装(命令行工具)和本地安装(js文件)\n")])])]),n("h3",{attrs:{id:"第三方模块-nodemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块-nodemon"}},[e._v("#")]),e._v(" 第三方模块 nodemon")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    nodemon 是一个命令行工具,辅助开发,作用是保存文件后自动执行文件,不需要重新输入命令\n    使用方法:使用nodemon代替node命令\n")])])]),n("h3",{attrs:{id:"第三方模块-nrm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块-nrm"}},[e._v("#")]),e._v(" 第三方模块 nrm")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    nrm是npm下载管理工具,可以快速切换npm下载地址,切换到国内淘宝的下载地址,速度会快很多\n    使用方法: nrl ls 显示可用下载地址 nrm use 地址 使用下载地址\n")])])]),n("h2",{attrs:{id:"前端构建工具-gulp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端构建工具-gulp"}},[e._v("#")]),e._v(" 前端构建工具 gulp")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("将机械化操作编写成任务,用命令行执行,用机器代替手工\n")])])]),n("h3",{attrs:{id:"gulp能做什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp能做什么"}},[e._v("#")]),e._v(" gulp能做什么")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    html,css,js文件压缩\n    es6,less等语法转换\n    公共文件抽离\n    修改文件,浏览器自动刷新\n")])])]),n("h3",{attrs:{id:"gulp提供的方法-使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp提供的方法-使用方法"}},[e._v("#")]),e._v(" gulp提供的方法(使用方法)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    gulp.src()获取任务需要处理的文件\n    gulp.dest()输出文件\n    gulp.task() 创建任务\n    gulp.watch()监视文件变化\n    .pipe() 处理操作\n")])])]),n("h3",{attrs:{id:"gulp使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp使用方法"}},[e._v("#")]),e._v(" gulp使用方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    下载gulp  npm install gulp\n    在项目根目录下新建gulpfile.js文件\n    重构项目文件结构:src目录放源文件.dist目录放修改后的文件\n    在gulpfile.js中编写任务,在命令行中执行任务\n")])])]),n("h3",{attrs:{id:"复制任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制任务"}},[e._v("#")]),e._v(" 复制任务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    gulp.task('first', () => {\n    console.log('第一个gulp任务');\n    gulp.src('./src/css/base.css')\n    .pipe(gulp.dest('dist/css'));})\n")])])]),n("h3",{attrs:{id:"gulp插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp插件"}},[e._v("#")]),e._v(" gulp插件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    gulp-htmlmin html压缩\n    gulp-csso css压缩\n    gulp-babel js语法转换\n    gulp-less  less语法转换\n    gulp-uglify js压缩\n    gule-file-include  抽取公共文件  语法@@include(路径)\n    browsersync 浏览器同步\n")])])]),n("h3",{attrs:{id:"package-json文件的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json文件的使用"}},[e._v("#")]),e._v(" package.json文件的使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    项目描述文件,记录了当前项目信息,名称,版本,作者,项目依赖第三方包的信息,传输文件不需要传输node_modules  package.json中有第三方依赖的信息,使用npm install 会默认下载所需要的第三方\n    使用 npm init -y 生成package.json\n")])])]),n("h2",{attrs:{id:"node-js模块查找规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js模块查找规则"}},[e._v("#")]),e._v(" node.js模块查找规则")]),e._v(" "),n("h3",{attrs:{id:"省略后缀查找机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#省略后缀查找机制"}},[e._v("#")]),e._v(" 省略后缀查找机制")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    如果省略后缀,先找同名js文件,找不到再找同名文件夹\n    如果找到的是同名文件夹,就会去找文件夹中的index.js\n    如果没有index.js就会去当前文件夹中的pakeage.js中查找main选项中有没有入口文件\n    如果指定的入口文件不存在或没有指定入口文件,就会报错\n")])])]),n("h3",{attrs:{id:"没有路径也没有后缀查找机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#没有路径也没有后缀查找机制"}},[e._v("#")]),e._v(" 没有路径也没有后缀查找机制")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    node.js会假设它是系统模块,去node_modules文件夹中查找是否有同名js文件\n    没有就找有没有同名文件夹\n    如果找到的是同名文件夹,就会去找文件夹中的index.js\n    如果没有index.js就会去当前文件夹中的pakeage.js中查找main选项中有没有入口文件\n    如果指定的入口文件不存在或没有指定入口文件,就会报错\n")])])]),n("h2",{attrs:{id:"node服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node服务器"}},[e._v("#")]),e._v(" Node服务器")]),e._v(" "),n("h3",{attrs:{id:"创建服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建服务器"}},[e._v("#")]),e._v(" 创建服务器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    const http = require('http') //引用系统模块\n    const app = http.createServer()//创建web服务器\n    app.on('request',(request,response)=>{//request 请求事件\n            request.method //获取请求的方式\n            req.url //获取请求的地址\n            req.headers //获取请求报文(请求头?)\n            response.end('相应结果')//作出相应\n    })\n    app.listen(3000) //监听3000端口\n")])])]),n("h3",{attrs:{id:"node响应"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node响应"}},[e._v("#")]),e._v(" Node响应")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("response.writeHead()设置响应报文\n    第一个参数是htpp状态码 如200 404 等\n    第二个参数是一个对象,json格式 {}\n        对象中包括相应类型 content-type:text/html;charset=uft8设置响应格式和编码\n请求参数\n    系统模块 url  处理url的\n    用法:const url = require('url'),可以写入第二个参数true 将查询参数解析成对象\n    url.parse()方法:解析url,返回对象,把url中各个部分拆分成属性放入对象中\n    url.parse()返回结果中,pathname是不包含参数的地址\n    使用系统模块path 中path.join方法拼接路径,会自动加上系统分隔符//或者\\\\\npost请求参数\n    post参数通过事件的方式接受,data事件和end事件\n    当请求参数传递时触发data事件,传递完毕后触发end事件\n    request.on(data) request.on(end)\n    系统模块 querystring \n    使用querystring.pase() 把字符串(json)转换为对象\n    post请求参数被放置在请求体中,获取post数据使用data和end事件,获取get数据使用url中的pathname\n路由 route\n    路由是指客户端请求地址与服务器程序代码的对应关系,简单来说就是请求什么响应什么,就是判断并响应的代码\n静态资源处理 static\n    使用第三方插件模块,mime判断页面请求类型,并返回\n    mime.getType(路径) 根据路径返回资源类型\nNode异步编程 Promise\n    promise是解决node.js中异步回调地狱的问题,是Es6语法\n    promise是构造函数,需要通过new的方式实例化,并且要传递一个匿名函数作为参数.函数有2个形参,resolve和reject\n    语法 \n    let promise = new Promise((resolve,reject)=>{\n    setTimeout(() => {\n                      if(false){\n                           resolve('哈哈')\n                       }else{\n                           reject('失败了')\n                       }\n    }, 200);\n      })\n    promise.then(result=>console.log(result)).catch(error=>console.log(error))\n    异步执行完成后,resolve(传出结果),外面使用then((result)=>{log(result)})接收\n    异步执行失败后,reject(传出结果),外面使用catch((result)=>{log(result)})接收\n    resolve和reject可以使用链式编程\n")])])]),n("h2",{attrs:{id:"mongdb数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongdb数据库"}},[e._v("#")]),e._v(" MongDB数据库")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("数据库相关概念\n    database:数据库,数据库软件可以有多个数据库\n    collection:集合,一组数据的集合,可以理解为js的数组\n    document:文档,一条具体的数据,可以理解为js的对象\n    field:字段,文档中的属性名称,可以理解为js对象的属性\n数据库链接\n    node需要安装mongoose模块,npm install mongoose\n    使用mongoose提供的connect方法链接数据库\n    mongoose.connect('数据库地址').then(回调函数).catch(回调函数)\n    then返回链接成功后的信息,catch返回失败的对象\n    在MongoDB中链接的数据库不存在,MongoDB会自动创建\n创建集合\n    创建集合分两步,一是对集合设定规则,二是创建集合并应用,创建mongoose.Schema构造函数的实例即可\n    设定集合规则:\n    const xxxSchema = new mongoose.Schema({name:String,author:String}) 给mongoose.Schema构造函数传入一个对象,写入属性名和数据类型\n    创建集合并应用规则\n    mongoose.model()用来创建集合\n    conse Xxx = mongoose.model('集合名称(首字母大写)',规则名),会返回一个构造函数\n创建文档\n    创建文档实际上就是向集合中插入数据PS集合创建后不插入文档,数据库内不显示,好比创建了一个li不追加到ul中\n    创建文档的方法,1:创建集合实例 2:调用实例对象下的save方法.或者使用构造函数的create方法\n    const xxxs = new xx({name:'猪肘子',author:'啊哈哈'})\n    xxxs.save()\n    或者使用↓↓\n    Xxx(创建集合model方法返回的构造函数).create({name:'猪肘子',author:'啊哈哈'}).then(result=>成功的代码).catch(err=>失败的代码)\nmongoDB数据库导入数据\n    mongoimport -d 要导入进哪个数据库的名字 -c 要导入到集合的名字 --file 要导入的文件\n    注意,导入数据库要先将MongoDB的安装目录下的bin目录添加到系统环境变量path中\n查找数据\n    集合构造函数.find({查询条件}).then(()=>{查询结果})\n    .find()查询,没有查询条件对象默认查询所有文档\n    find({\"name\" : {$regex:'大虾'}}) 模糊查询\n    限定查询:$gt 大于  $lt 小于 例 : find({age{$gt:3,$lt:9}})\n    匹配包含:$in 例 .find({hobbies:{$in:打豆豆}}),常用于搜索查询\n    查询字段:.find().select('字段') 不想查询的字段用负号\n    排序查询:.find().sort(age) 升序,降序加负号\n    跳过限制:.find().skip(跳过多少条开始查询).limit(限定查询几条)\n删除文档\n    删除单个 .findOneAndDelete({查询条件}).then((res)=>{}),查找一个文档并删除,查找到多个只删除找到的第一个\n    删除多个 .deleteMany({删除条件}).then((res)=>{})\n更新文档\n    更新单个 集合构造函数.updateOne({查询条件},{要修改的值}).then((res)=>{})\n    更新多个 集合构造函数.updateMany({查询条件},{要修改的值}).then((res)=>{})\nmongoose验证\n    创建集合规则时,可以设置字段的验证规则,验证失败则不插入文档\n    验证使用对象设置 例 name:{type:String,required:true},限制name字段是类型是字符串,而且必须填写\n    required:true  必传字段,添加此属性的字段,必须添加\n    minlength:长度  限制最小长度\n    maxlength:长度  限制最大长度\n    trim:true 去除两端空格\n    min:n 限制数值类型最小为n\n    max:n 限制数值类型最大为n\n    default:指定默认值,例 default:Date.now  不传会自动使用默认值\n    enum:['1','2','3'] 指定传入值,传入的必须是数组内的值\n    重点:unique:true 传入的值不能和数据库内的重复\n    自定义验证器:validate:{validetor:(v)=>{v&&v.length>4},message:'自定义错误信息'} 验证v存在并且v的长度大于4\n集合关联\n    不同集合的数据是有关系的,比如文章和用户在不同的集合中,但是用户发布的文章,需要关联起来,就需要使用集合关联\n    使用方法:使用ID进行关联\n    使用populate进行关联查询\n    id的类型:mongoose.Schema.Types.ObjectId,ref:'要关联的集合'\n    .find().populate(关联集合属性)查询关联\n")])])]),n("h2",{attrs:{id:"第三方路由模块-router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方路由模块-router"}},[e._v("#")]),e._v(" 第三方路由模块 router")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1 获取路由对象 const getRouter = require(\"router\"),router = getRouter(),\n2 调用路由对象提供的方法创建路由 router.get('/add',()=>{})\n3 启用路由 在请求事件中使用 router(res,req,()=>{必填回调函数})\n")])])]),n("h2",{attrs:{id:"第三方静态资源处理模块-serve-static"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三方静态资源处理模块-serve-static"}},[e._v("#")]),e._v(" 第三方静态资源处理模块 serve-static")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1 引入模块 const servestatic = require(' serve-static')\n2 调用方法创建静态资源服务并制定静态资源目录,并在请求事件中开启const serve = serve-static('静态资源目录') ,serve(res,req,callback)")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);