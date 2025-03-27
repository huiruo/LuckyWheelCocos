
# js 脚本

# 模块化脚本
Cocos Creator 允许你将代码拆分成多个脚本文件，并且让它们相互调用。要实现这点，你需要了解如何在 Cocos Creator 中定义和使用模块，这个步骤简称为 模块化。

如果你还不确定模块化究竟能做什么，模块化相当于：

* Java 和 Python 中的 import
* C# 中的 using
* C/C++ 中的 include
* HTML 中的 `<link>`

模块化使你可以在 Cocos Creator 中引用其它脚本文件：

1. 访问其它文件导出的参数
2. 调用其它文件导出的方法
3. 使用其它文件导出的类型
4. 使用或继承其它 Component

Cocos Creator 中的 JavaScript 使用和 Node.js 几乎相同的 CommonJS 标准来实现模块化，简单来说：

1. 每一个单独的脚本文件就构成一个模块
2. 每个模块都是一个单独的作用域
3. 以 同步 的 require 方法来引用其它模块
4. 设置 module.exports 为导出的变量
