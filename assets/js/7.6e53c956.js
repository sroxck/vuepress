(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{562:function(t,s,a){t.exports=a.p+"assets/img/vue.dfec6b46.png"},563:function(t,s,a){t.exports=a.p+"assets/img/data1.40b0a30b.png"},564:function(t,s,a){t.exports=a.p+"assets/img/ob.106e9852.png"},565:function(t,s,a){t.exports=a.p+"assets/img/dp.305ee3cd.png"},566:function(t,s,a){t.exports=a.p+"assets/img/watch.a5469e5d.png"},567:function(t,s,a){t.exports=a.p+"assets/img/cb.75212aa1.png"},568:function(t,s,a){t.exports=a.p+"assets/img/fn.403489eb.png"},827:function(t,s,a){"use strict";a.r(s);var e=a(58),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),e("p",[t._v("模仿vue,手写一个属于自己的mvvm框架")]),t._v(" "),e("h2",{attrs:{id:"流程分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程分析"}},[t._v("#")]),t._v(" 流程分析")]),t._v(" "),e("p",[t._v("视图 -> 编译 -> 渲染")]),t._v(" "),e("p",[t._v("数据 -> 劫持 -> 编译")]),t._v(" "),e("h2",{attrs:{id:"流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),e("p",[e("img",{attrs:{src:a(562),alt:"img"}})]),t._v(" "),e("p",[t._v("$el视图经过complier编译,进行render渲染,通过watcher观察数据变化,通知ovserver劫持"),e("br"),t._v("\n$data 数据经过observer劫持,通过dep依赖收集器触发观察者,观察者触发更新")]),t._v(" "),e("p",[t._v("data进行数据代理,函数代理\n"),e("img",{attrs:{src:a(563),alt:"img"}}),t._v("\nobserver递归进行数据劫持,并拿到名单通知watch进行视图更新\n"),e("img",{attrs:{src:a(564),alt:"img"}}),t._v("\ndp存储watch,循环所有watcher 调用更新方法\n"),e("img",{attrs:{src:a(565),alt:"img"}}),t._v("\nwatcher返回表达式,并执行回调函数进行编译渲染\n"),e("img",{attrs:{src:a(566),alt:"img"}}),t._v("\n通过watcher的回调,把设置好的表达式的值,赋值给对应的节点\n"),e("img",{attrs:{src:a(567),alt:"img"}}),t._v("\n编译主要做了以下事情,都是通过watcher的回调把表达式的值赋值给节点,需要注意都是 使用Dep.target静态变量存储watcher的实例,然后通过dep名单循环去通知更新\n"),e("img",{attrs:{src:a(568),alt:"img"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);