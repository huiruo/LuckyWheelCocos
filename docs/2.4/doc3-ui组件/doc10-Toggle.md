
# Toggle
Toggle 是一个 CheckBox，当它和 ToggleGroup 一起使用的时候，可以变成 RadioButton。

点击 属性检查器 下面的 添加组件 按钮，然后从 UI 组件 中选择 Toggle，即可添加 Toggle 组件到节点上。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/toggle.DCGXyPHG.png)

## Toggle 属性
注意：因为 Toggle 继承自 Button，所以关于 Toggle 的 Button 相关属性的详细说明和用法请参考 Button 组件。

1. isChecked 布尔类型，如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。
2. checkMark cc.Sprite 类型，Toggle 处于选中状态时显示的图片
3. toggleGroup	cc.ToggleGroup 类型，Toggle 所属的 ToggleGroup，这个属性是可选的。如果这个属性为 null，则 Toggle 是一个 CheckBox，否则，Toggle 是一个 RadioButton。
4. Check Events	列表类型，默认为空，用户添加的每一个事件由节点引用，组件名称和一个响应函数组成。详情见下方的 Toggle 事件 部分。


## 2.Toggle 事件
Toggle 的事件回调有二个参数，第一个参数是 Toggle 本身，第二个参数是 customEventData。

1. Target 带有脚本组件的节点。
2. Component	脚本组件名称。
3. Handler	指定一个回调函数，当 Toggle 的事件发生的时候会调用此函数。
4. CustomEventData	用户指定任意的字符串作为事件回调的最后一个参数传入。

## 3.详细说明
Toggle 组件的节点树一般为：
https://docs.cocos.com/creator/2.4/manual/zh/components/toggle.html

### 3-1.通过脚本代码添加回调
方法1:
这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 cc.Component.EventHandler 对象，然后设置好对应的 target、component、handler 和 customEventData 参数。
```js
var checkEventHandler = new cc.Component.EventHandler();
checkEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
checkEventHandler.component = "cc.MyComponent"
checkEventHandler.handler = "callback";
checkEventHandler.customEventData = "foobar";

toggle.checkEvents.push(checkEventHandler);

// here is your component file
cc.Class({
    name: 'cc.MyComponent'
    extends: cc.Component,

    properties: {
    },

    callback: function(toggle, customEventData) {
        // 这里的 toggle 是事件发出的 Toggle 组件
        // 这里的 customEventData 参数就等于之前设置的 "foobar"
    }
});
```

方法2:
```js
// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:

cc.Class({
    extends: cc.Component,

    properties: {
       toggle: cc.Toggle
    },

    onLoad: function () {
       this.toggle.node.on('toggle', this.callback, this);
    },

    callback: function (toggle) {
       // 回调的参数是 toggle 组件
       // do whatever you want with toggle
    }
});
```

