
# PageView 是一种页面视图容器.
https://docs.cocos.com/creator/2.4/manual/zh/components/pageview.html

点击 属性检查器 下面的 添加组件 按钮，然后从 UI 组件 中选择 PageView，即可添加 PageView 组件到节点上。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/pageview-inspector.CvOm9MRz.png)


## 1.PageView 事件:
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/pageview-event.BFF739kr.png)

1. Target 带有脚本组件的节点
2. 脚本组件名称
3. Handler 指定一个回调函数，当 PageView 的事件发生的时候会调用此函数
4. CustomEventData 用户指定任意的字符串作为事件回调的最后一个参数传入

PageView 的事件回调有两个参数，第一个参数是 PageView 本身，第二个参数是 PageView 的事件类型。

## 2.详细说明
PageView 组件必须有指定的 content 节点才能起作用，content 中的每个子节点为一个单独页面，该每个页面的大小为 PageView 节点的大小，操作效果分为以下两种：

1. 缓慢滑动：通过拖拽视图中的页面到达指定的 ScrollThreshold 数值（该数值是页面大小的百分比）以后松开会自动滑动到下一页。
2. 快速滑动：快速的向一个方向进行拖动，自动滑倒下一页，每次滑动最多只能一页。

通常一个 PageView 的节点树如下图：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/pageview-hierarchy.nB4Fv2hi.png)

## 3.通过脚本代码添加回调
方法一:

这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 cc.Component.EventHandler 对象，然后设置好对应的 target、component、handler 和 customEventData 参数。
```js
var pageViewEventHandler = new cc.Component.EventHandler();
pageViewEventHandler.target = this.node; // 这个是你的事件处理代码组件所属的节点
pageViewEventHandler.component = "cc.MyComponent"
pageViewEventHandler.handler = "callback";
pageViewEventHandler.customEventData = "foobar";

pageView.pageEvents.push(pageViewEventHandler);

// here is your component file
cc.Class({
    name: 'cc.MyComponent'

    extends: cc.Component,

    properties: {
    },

    // 注意参数的顺序和类型是固定的
    callback: function(pageView, eventType, customEventData) {
        // 这里 pageView 是一个 PageView 组件对象实例
        // 这里的 eventType === cc.PageView.EventType.PAGE_TURNING
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
});
```

方法2:
通过 pageView.node.on('page-turning', ...) 的方式来添加
```js
// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:

cc.Class({
    extends: cc.Component,

    properties: {
       pageView: cc.PageView
    },

    onLoad: function () {
       this.pageView.node.on('page-turning', this.callback, this);
    },

    callback: function (pageView) {
       // 回调的参数是 pageView 组件
       // 另外，注意这种方式注册的事件，也无法传递 customEventData
    }
});
```
