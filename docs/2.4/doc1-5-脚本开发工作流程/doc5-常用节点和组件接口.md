# 常用节点和组件接口
在通过 访问节点和组件 介绍的方法获取到节点或组件实例后，这篇文章将会介绍通过节点和组件实例可以通过哪些常用接口实现我们需要的种种效果和操作。这一篇也可以认为是 cc.Node 和 cc.Component 类的 API 阅读指南，可以配合 API 一起学习理解。

## 1.节点状态和层级操作
假设我们在一个组件脚本中，通过 this.node 访问当前脚本所在节点。


### 1-1.激活/关闭节点
节点默认是激活的，我们可以在代码中设置它的激活状态，方法是设置节点的 active 属性：
```js
this.node.active = false;
```

设置 active 属性和在编辑器中切换节点的激活、关闭状态，效果是一样的。当一个节点是关闭状态时，它的所有组件都将被禁用。同时，它所有子节点，以及子节点上的组件也会跟着被禁用。要注意的是，子节点被禁用时，并不会改变它们的 active 属性，因此当父节点重新激活的时候它们就会回到原来的状态。

也就是说，active 表示的其实是该节点 自身的 激活状态，而这个节点 当前 是否可被激活则取决于它的父节点。并且如果它不在当前场景中，它也无法被激活。我们可以通过节点上的只读属性 activeInHierarchy 来判断它当前是否已经激活。

```js
this.node.active = true;
```

若节点原先就处于 可被激活 状态，修改 active 为 true 就会立即触发激活操作：
1. 在场景中重新激活该节点和节点下所有 active 为 true 的子节点
2. 该节点和所有子节点上的所有组件都会被启用，它们中的 update 方法之后每帧都会执行
3. 这些组件上如果有 onEnable 方法，这些方法将被执行

```js
this.node.active = false;
```

若该节点原先就已经被激活，修改 active 为 false 就会立即触发关闭操作：

1. 在场景中隐藏该节点和节点下的所有子节点
2. 该节点和所有子节点上的所有组件都将被禁用，也就是不会再执行这些组件中的 update 中的代码
3. 这些组件上如果有 onDisable 方法，这些方法将被执行

### 1-2.更改节点的父节点
假设父节点为 parentNode，子节点为 this.node，您可以：
```js
this.node.parent = parentNode;
```

或: 这两种方法是等价的。
```js
this.node.removeFromParent(false);
parentNode.addChild(this.node);
```

注意：
1. removeFromParent 通常需要传入一个 false，否则默认会清空节点上绑定的事件和 action 等。

2. 通过 创建和销毁节点 介绍的方法创建出新节点后，要为节点设置一个父节点才能正确完成节点的初始化。

### 1-3.索引节点的子节点
1. this.node.children 将返回节点的所有子节点数组。
2. this.node.childrenCount 将返回节点的子节点数量。

注意：以上两个 API 都只会返回节点的直接子节点，不会返回子节点的子节点。

## 2.更改节点的变换（位置、旋转、缩放、尺寸）

### 2-1. 更改节点位置
分别对 x 轴和 y 轴坐标赋值：
```js
this.node.x = 100;
this.node.y = 50;
```

还可以使用 setPosition 方法进行赋值：
```js
this.node.setPosition(100, 50);
this.node.setPosition(cc.v2(100, 50));
```

或者通过设置 position 变量进行赋值：
```js
this.node.position = cc.v2(100, 50);
```

以上几种用法等价。

### 2-2.更改节点旋转

```js
this.node.rotation = 90;
```

或

```js
this.node.setRotation(90);
```

### 2-3.更改节点缩放

```js
this.node.scaleX = 2;
this.node.scaleY = 2;
```

或
```js
this.node.setScale(2);
this.node.setScale(2, 2);
```

以上两种方法等价。setScale 传入单个参数时，会同时修改 scaleX 和 scaleY。

### 2-4.更改节点尺寸
```js
this.node.setContentSize(100, 100);
this.node.setContentSize(cc.size(100, 100));
```

或

```js
this.node.width = 100;
this.node.height = 100;
```

以上两种方式等价。


## 2-4.更改节点锚点位置
```js
this.node.anchorX = 1;
this.node.anchorY = 0;
```

或

```js
this.node.setAnchorPoint(1, 0);
```

注意以上这些修改变换的方法会影响到节点上挂载的渲染组件，比如 Sprite 图片的尺寸、旋转等等。

## 2-5.颜色和不透明度
在使用 Sprite、Label 这些基本的渲染组件时，要注意修改颜色和不透明度的操作只能在节点的实例上进行，因为这些渲染组件本身并没有设置颜色和不透明度的接口。

假如我们有一个 Sprite 的实例为 mySprite，如果需要设置它的颜色：

```js
mySprite.node.color = cc.Color.RED;
```

设置不透明度：

```js
mySprite.node.opacity = 128;
```

## 2-6.常用组件接口
cc.Component 是所有组件的基类，任何组件都包括如下的常见接口（假设我们在该组件的脚本中，以 this 指代本组件）：

- this.node：该组件所属的节点实例
- this.enabled：是否每帧执行该组件的 update 方法，同时也用来控制渲染组件是否显示
- update(dt)：作为组件的成员方法，在组件的 enabled 属性为 true 时，其中的代码会每帧执行
- onLoad()：组件所在节点进行初始化时（节点添加到节点树时）执行
- start()：会在该组件第一次 update 之前执行，通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑
