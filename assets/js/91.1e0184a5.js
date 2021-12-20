(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{651:function(t,a,s){"use strict";s.r(a);var n=s(58),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"时间日期类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间日期类"}},[t._v("#")]),t._v(" 时间日期类")]),t._v(" "),s("blockquote",[s("p",[t._v("java.util.date 类 表示特定的瞬间,精确到毫秒\nSystem.currentTimeMillis() 获取当前系统时间的毫秒值,时间戳")])]),t._v(" "),s("h2",{attrs:{id:"date类中常见的构造方法和成员方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date类中常见的构造方法和成员方法"}},[t._v("#")]),t._v(" date类中常见的构造方法和成员方法")]),t._v(" "),s("h3",{attrs:{id:"无参构造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无参构造"}},[t._v("#")]),t._v(" 无参构造")]),t._v(" "),s("p",[s("code",[t._v("Date date = new Date();")]),t._v(" 获取当前系统的日期和时间   格式 Mon Feb 08 14:56:42 CST 2021")]),t._v(" "),s("h3",{attrs:{id:"有参构造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有参构造"}},[t._v("#")]),t._v(" 有参构造")]),t._v(" "),s("p",[s("code",[t._v("Date date = new Date(Long date);")]),t._v(" 传递毫秒值(时间戳),把毫秒值转换为Date日期")]),t._v(" "),s("h3",{attrs:{id:"long-gettime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#long-gettime"}},[t._v("#")]),t._v(" Long getTime()")]),t._v(" "),s("p",[t._v("将日期转换为毫秒值,相当于System.currentTimeMillis()")]),t._v(" "),s("h1",{attrs:{id:"dateformat类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dateformat类"}},[t._v("#")]),t._v(" DateFormat类")]),t._v(" "),s("blockquote",[s("p",[t._v("java.text.DateFormat类\nDateFormat类是日期格式化子类的抽象类,直接子类为SimpleDateFormat")])]),t._v(" "),s("h2",{attrs:{id:"string-format-date-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-format-date-date"}},[t._v("#")]),t._v(" String format(Date date)")]),t._v(" "),s("p",[t._v("按照指定的模式,把Date日期,格式化为符合模式的字符串")]),t._v(" "),s("h2",{attrs:{id:"date-parse-string-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-parse-string-source"}},[t._v("#")]),t._v(" Date parse(String source)")]),t._v(" "),s("p",[t._v("将符合模式的字符串,解析为日期")]),t._v(" "),s("p",[t._v("DateFormat是抽象类,无法直接使用,可以使用直接子类为SimpleDateFormat")]),t._v(" "),s("h3",{attrs:{id:"构造方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[t._v("#")]),t._v(" 构造方法")]),t._v(" "),s("p",[t._v("SimpleDateFormat(String pattern )\n用给定的模式,和默认语言环境的日期格式符号构造\n参数\nString pattern : 传递指定的模式")]),t._v(" "),s("h3",{attrs:{id:"将日期格式化为字符串-使用方法-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将日期格式化为字符串-使用方法-format"}},[t._v("#")]),t._v(" 将日期格式化为字符串-使用方法 format")]),t._v(" "),s("p",[s("code",[t._v("String format(Date data)")])]),t._v(" "),s("ol",[s("li",[t._v("创建SimpleDateFormat对象,构造方法中传递指定的模式")]),t._v(" "),s("li",[t._v("使用SimpleDateFormat对象中的format方法,按照构造方法中的模式,把Date日期格式化为符合模式的字符串")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoDateFormat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建时间戳")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpObj")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建SimpleDateFormat对象,指定格式化模式")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpObj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用format成员方法格式化,返回格式化后的字符串")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"将字符串解析为日期格式-使用方法-parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将字符串解析为日期格式-使用方法-parse"}},[t._v("#")]),t._v(" 将字符串解析为日期格式-使用方法 parse")]),t._v(" "),s("p",[s("code",[t._v("Date parse(String date)")])]),t._v(" "),s("ol",[s("li",[t._v("创建SimpleDateFormat对象,构造方法中传递指定的模式")]),t._v(" "),s("li",[t._v("使用SimpleDateFormat对象中的parse方法,把符合构造方法模式中的字符串解析为Date日期")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意事项: parse方法声明了一个异常ParseException解析异常,如果字符串和构造方法的模式不一样,那么程序就会抛出此异常,调用一个抛出了异常的方法,就必须处理这个异常,要么throws继续抛出这个异常,澳门try catch 继续处理这个异常")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoDateFormat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建时间戳")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpObj")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建SimpleDateFormat对象,指定格式化模式")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpObj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用format成员方法格式化,返回格式化后的字符串")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);