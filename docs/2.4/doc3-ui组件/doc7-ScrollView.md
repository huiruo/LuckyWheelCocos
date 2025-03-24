# ScrollView
ScrollView 是一种带滚动功能的容器，它提供一种方式可以在有限的显示区域内浏览更多的内容。通常 ScrollView 会与 Mask 组件配合使用，同时也可以添加 ScrollBar 组件来显示浏览内容的位置。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/scrollview-content.iyau4JQn.png)

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/scrollview-inspector.42qjvZLx.png)

点击 属性检查器 下面的 添加组件 按钮，然后从 UI 组件 中选择 ScrollView，即可添加 ScrollView 组件到节点上。


## 1.ScrollView 属性
1. content	它是一个节点引用，用来创建 ScrollView 的可滚动内容，通常这可能是一个包含一张巨大图片的节点。
2. Horizontal	布尔值，是否允许横向滚动。
3. Vertical 布尔值，是否允许纵向滚动。
4. Inertia	滚动的时候是否有加速度。
5. Brake	浮点数，滚动之后的减速系数。取值范围是 0-1，如果是 1 则立马停止滚动，如果是 0，则会一直滚动到 content 的边界。
6. Elastic 布尔值，是否回弹。
7. Horizontal ScrollBar	它是一个节点引用，用来创建一个滚动条来显示 content 在水平方向上的位置。
8. Vertical ScrollBar	它是一个节点引用，用来创建一个滚动条来显示 content 在垂直方向上的位置
9. Scroll Events	列表类型，默认为空，用户添加的每一个事件由节点引用，组件名称和一个响应函数组成。详情见下方的 Scrollview 事件。
10. CancelInnerEvents	如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。
	
## 2.ScrollView 事件
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/scrollview-event.CwR_1oE-.png)

1. Target 带有脚本组件的节点。
2. Component 脚本组件名称。
3. Handler	指定一个回调函数，当 ScrollView 的事件发生的时候会调用此函数。
4. CustomEventData 指定一个回调函数，当 ScrollView 的事件发生的时候会调用此函数。

Scrollview 的事件回调有两个参数，第一个参数是 ScrollView 本身，第二个参数是 ScrollView 的事件类型。


## 3.ScrollBar 设置
ScrollBar 是可选的，你可以选择只设置 Horizontal ScrollBar 或者 Vertical ScrollBar，当然也可以两者都设置。建立关联可以通过在 层级管理器 里面拖拽一个带有 ScrollBar 组件的节点到 ScrollView 的相应字段完成。

详细说明:
ScrollView 组件必须有指定的 content 节点才能起作用，通过指定滚动方向和 content 节点在此方向上的长度来计算滚动时的位置信息，Content 节点也可以通过 UIWidget 设置自动 resize。

通常一个 ScrollView 的节点树如下图：
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/scrollview-hierarchy.BPXpM_jy.png)

这里的 Viewport 用来定义一个可以显示的滚动区域，所以通常 Mask 组件会被添加到 Viewport 上。可以滚动的内容可以直接放到 content 节点或者添加节 content 的子节点上。


## 4.通过脚本代码添加回调

### 4-1.方法一
这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 cc.Component.EventHandler 对象，然后设置好对应的 target、component、handler 和 customEventData 参数。
```js
// here is your component file, file name = MyComponent.js
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function () {
        var scrollViewEventHandler = new cc.Component.EventHandler();
        scrollViewEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        scrollViewEventHandler.component = "MyComponent";// 这个是代码文件名
        scrollViewEventHandler.handler = "callback";
        scrollViewEventHandler.customEventData = "foobar";

        var scrollview = node.getComponent(cc.ScrollView);
        scrollview.scrollEvents.push(scrollViewEventHandler);
    },

	// 注意参数的顺序和类型是固定的
    callback: function (scrollview, eventType, customEventData) {
        // 这里 scrollview 是一个 Scrollview 组件对象实例
        // 这里的 eventType === cc.ScrollView.EventType enum 里面的值
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
});
```

### 4-2.方法2
通过 scrollview.node.on('scroll-to-top', ...) 的方式来添加
```js
// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:

cc.Class({
    extends: cc.Component,

    properties: {
       scrollview: cc.ScrollView
    },

    onLoad: function () {
       this.scrollview.node.on('scroll-to-top', this.callback, this);
    },

    callback: function (scrollView) {
       // 回调的参数是 ScrollView 组件
       // do whatever you want with scrollview
    }
});
```

同样的，你也可以注册 scrolling、touch-up、scroll-began 等事件，这些事件的回调函数的参数与 scroll-to-top 的参数一致。






