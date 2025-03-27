
# 使用 TypeScript 脚本
和其他 JavaScript 脚本一样，项目 assets 目录下的 TypeScript 脚本（.ts 文件) 在创建或修改后激活编辑器，就会被编译成兼容浏览器标准的 ES5 JavaScript 脚本。编译后的脚本存放在项目下的 library（还包括其他资源）目录。

## 1.在新项目中使用 TypeScript
新建项目时，从项目模板中选择 HelloWorld TypeScript，即可创建一个包括 TypeScript 相关设置和基本组件的 HelloWorld 项目。

## 2.使用 TypeScript 声明 CCClass
在 TypeScript 中 class 的声明方式 和 ES6 Class 相似。但为了编辑器能够正确解析 属性检查器 里显示的各类属性，我们还需要使用引擎内置的一些装饰器，来将普通的 class 声明成 CCClass。这和目前将 JavaScript 中的 ES6 Class 声明为 CCClass 的方法类似。关于装饰器的更多信息请参考 TypeScript decorator。

```
https://www.typescriptlang.org/docs/handbook/classes.html

http://es6.ruanyifeng.com/#docs/class
```

下面是一个基本的 TypeScript 声明组件的实例：
```js
const {ccclass, property} = cc._decorator; // 从 cc._decorator 命名空间中引入 ccclass 和 property 两个装饰器

@ccclass // 使用装饰器声明 CCClass
export default class NewClass extends cc.Component { // ES6 Class 声明语法，继承 cc.Component

    @property(cc.Label)     // 使用 property 装饰器声明属性，括号里是属性类型，装饰器里的类型声明主要用于编辑器展示
    label: cc.Label = null; // 这里是 TypeScript 用来声明变量类型的写法，冒号后面是属性类型，等号后面是默认值

    // 也可以使用完整属性定义格式
    @property({
        visible: false
    })
    text: string = 'hello';

    // 成员方法
    onLoad() {
        // init logic
    }
}
```

装饰器使用 @ 字符开头作为标记，装饰器主要用于编辑器对组件和属性的识别，而 TypeScript 语法中的类型声明 myVar: Type 则允许 VS Code 编码时自动识别变量类型并提示其成员。

## 3. 更多属性类型声明方法
1. 声明值类型
```js
@property({
    type: cc.Integer
})
myInteger = 1;

@property
myNumber = 0;

@property
myText = "";

@property(cc.Node)
myNode: cc.Node = null;

@property
myOffset = new cc.Vec2(100, 100);
```

2. 声明数组
```js
@property([cc.Node])
public myNodes: cc.Node[] = [];

@property([cc.Color])
public myColors: cc.Color[] = [];
```

3. 声明 getset
```js
@property
_width = 100;

@property
get width () {
    return this._width;
}

set width (value) {
    cc.log('width changed');
    this._width = value;
}
```
注意：TypeScript 的 public, private 修饰符不影响成员在 属性检查器 中的默认可见性，默认的可见性仍然取决于成员变量名是否以下划线开头。


## 4.完善的智能提示功能
按照 使用准备 里描述的方式创建项目或添加配置后，在 VS Code 里打开项目，就可以享受完善的代码智能提示功能了。

### 4-1.组件本身的属性成员
只要输入 this. 就会自动提示组件本身的其他成员，输入 this.member. 可以继续提示该成员的属性或方法

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/intellisense.CYHWz2-3.jpg)


### 4-2.提示其他组件属性和方法
首先我们声明一个组件：
```js
// MyModule.ts
const {ccclass, property} = cc._decorator;

@ccclass
export class MyModule extends cc.Component {
    @property(cc.String)
    myName: string = "";

    @property(cc.Node)
    myNode: cc.Node = null;
}
```

然后在其他组件中 import MyModule, 并且声明一个 MyModule 类型的成员变量：
```js
// MyUser.ts
const {ccclass, property} = cc._decorator;
import {MyModule} from './MyModule';

@ccclass
export class MyUser extends cc.Component {
    @property(MyModule)
    public myModule: MyModule = null;

    /*
     * // 声明自定义类型数组
     * @property(MyModule)
     * public myModule: MyModule[] = [];
     *
     * @property({
     *     type: MyModule
     * })
     * public myModule: MyModule[] = [];
     */

    public onLoad() {
        // init logic
        this.myModule.myName = 'John';
    }
}
```

输入 this.myModule. 时，就可以提示我们在 MyModule.ts 中声明的属性了。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/auto-complete.NotGL2V3.gif)

注意：如果将已声明属性修改为数组类型，但是在编辑器中却未生效。那么请通过组件菜单对组件进行重置。

## 5. 1.10 版本之后的特殊类型
在 v1.10 包括之后的版本，Creator 对资源类型进行了部分调整。cc.Texture2D、cc.AudioClip、cc.ParticleAsset 类型数据在 ts 中的声明一定要按照以下的格式进行声明：
```js
@property({
    type: cc.Texture2D,
})
texture: cc.Texture2D = null;

@property({
    type: cc.Texture2D,
})
textures: cc.Texture2D[] = [];
```

## 6.使用命名空间
在 TypeScript 里，命名空间是位于全局命名空间下的一个普通的带有名字的 JavaScript 对象。通常用于在使用全局变量时为变量加入命名空间限制，避免污染全局空间。命名空间和模块化是完全不同的概念，命名空间无法导出或引用，仅用来提供通过命名空间访问的全局变量和方法。关于命名空间和模块化更详细的解释请参阅官方文档 命名空间和模块。

Creator 中默认所有 assets 目录下的脚本都会进行编译，自动为每个脚本生成模块化封装，以便脚本之间可以通过 import 或 require 相互引用。当希望把一个脚本中的变量和方法放置在全局命名空间，而不是放在某个模块中时，我们需要选中这个脚本资源，并在 属性检查器 里设置该脚本 导入为插件。设为插件的脚本将不会进行模块化封装，也不会进行自动编译。
