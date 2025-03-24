## EditBox 是一种文本输入组件，该组件让你可以轻松获取用户输入的文本。
https://docs.cocos.com/creator/2.4/manual/zh/components/editbox.html

![alt text](![alt text](image.png))

点击 属性检查器 下面的 添加组件 按钮，然后从 UI 组件 中选择 EditBox，即可添加 EditBox 组件到节点上。

## 1.EditBox 组件升级
- 新增 textLabel、placeholderLabel、background 属性，用户可以通过挂载自定义的 Label 或 Sprite 组件，更灵活的去配置 EditBox 组件的样式

- 废弃 fontSize、fontColor、lineHeight、placeholderFontSize、placeholderFontColor、backgroundImage、stayOnTop 属性，Cocos Creator 会自动将这些属性的值升级为所挂载组件上的相应属性

- 废弃 setFocus() 方法，新增 focus() 和 blur() 方法，为 EditBox 组件提供主动结束输入文本的能力

## 2.EditBox 属性
1. String	输入框的初始输入内容，如果为空则会显示占位符的文本
2. Placeholder 输入框占位符的文本内容
3. Background	输入框背景节点上挂载的 Sprite 组件对象
4. Text Label	输入框输入文本节点上挂载的 Label 组件对象
5. Placeholder Label	输入框占位符节点上挂载的 Label 组件对象
6. KeyboardReturnType	指定移动设备上面回车按钮的样式
7. Input Flag	指定输入标识：可以指定输入方式为密码或者单词首字母大写（仅支持 Android 平台）
8. Input Mode	指定输入模式: ANY 表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。
9. Max Length	输入框最大允许输入的字符个数
10. Tab Index	修改 DOM 输入元素的 tabIndex，这个属性只有在 Web 上面修改有意义。
11. Editing Did Began	开始编辑文本输入框触发的事件回调，详情请参考下方的 Editing Did Began 事件。
12. Text Changed	编辑文本输入框时触发的事件回调，详情请参考下方的 Text Changed 事件。
13. Editing Did Ended	结束编辑文本输入框时触发的事件回调，详情请参考下方的 Editing Did Ended 事件。
14. Editing Return	当用户按下回车按键时的事件回调，目前不支持 windows 平台，详情请参考下方的 Editing Return 事件。

## 3.EditBox 事件
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/editbox-event.B9iaPquh.png)

### 3-1.Editing Did Began 事件
1. Target,带有脚本组件的节点。
2. Component	脚本组件名称。
3. Handler	指定一个回调函数，当用户开始输入文本的时候会调用该函数
4. CustomEventData	用户指定任意的字符串作为事件回调的最后一个参数传入。

### 3-2.Text Changed 事件
1. Target  带有脚本组件的节点。
2. Component 脚本组件名称。
3. Handler 指定一个回调函数，当用户正在输入文本的时候会调用该函数
4. CustomEventData 用户指定任意的字符串作为事件回调的最后一个参数传入。

### 3-3.Editing Did Ended 事件
1. Target 带有脚本组件的节点。
2. Component 脚本组件名称。
3. Handler	指定一个回调函数，当用户输入文本结束时会调用该函数。
4. CustomEventData	用户指定任意的字符串作为事件回调的最后一个参数传入。

### 3-4.Editing Return 事件
1. Target 带有脚本组件的节点。
2. Component	脚本组件名称。
3. Handler 指定一个回调函数，当用户输入文本按下回车键时会调用该函数。
4. CustomEventData 用户指定任意的字符串作为事件回调的最后一个参数传入。


## 4.通过脚本代码添加回调
### 4-1.方法一
这种方法添加的事件回调和使用编辑器添加的事件回调是一样的，都是通过代码添加。首先需要构造一个 cc.Component.EventHandler 对象，然后设置好对应的 target、component、handler 和 customEventData 参数。
```js
var editboxEventHandler = new cc.Component.EventHandler();
editboxEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
editboxEventHandler.component = "cc.MyComponent"
editboxEventHandler.handler = "onEditDidBegan";
editboxEventHandler.customEventData = "foobar";

editbox.editingDidBegan.push(editboxEventHandler);
// 你也可以通过类似的方式来注册其它回调函数
// editbox.editingDidEnded.push(editboxEventHandler);
// editbox.textChanged.push(editboxEventHandler);
// editbox.editingReturn.push(editboxEventHandler);


// here is your component file
cc.Class({
    name: 'cc.MyComponent'
    extends: cc.Component,

    properties: {
    },

    onEditDidBegan: function(editbox, customEventData) {
        // 这里 editbox 是一个 cc.EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    },
    // 假设这个回调是给 editingDidEnded 事件的
    onEditDidEnded: function(editbox, customEventData) {
        // 这里 editbox 是一个 cc.EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // 假设这个回调是给 textChanged 事件的
    onTextChanged: function(text, editbox, customEventData) {
        // 这里的 text 表示 修改完后的 EditBox 的文本内容
        // 这里 editbox 是一个 cc.EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // 假设这个回调是给 editingReturn 事件的
    onEditingReturn: function(editbox,  customEventData) {
        // 这里 editbox 是一个 cc.EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
});
```

### 4-2.方法二
通过 editbox.node.on('editing-did-began', ...) 的方式来添加
```js
// 假设我们在一个组件的 onLoad 方法里面添加事件处理回调，在 callback 函数中进行事件处理:

cc.Class({
    extends: cc.Component,

    properties: {
       editbox: cc.EditBox
    },

    onLoad: function () {
       this.editbox.node.on('editing-did-began', this.callback, this);
    },

    callback: function (editbox) {
       // 回调的参数是 editbox 组件
       // do whatever you want with the editbox
    }
});
```

同样的，你也可以注册 editing-did-ended、text-changed 和 editing-return 事件，这些事件的回调函数的参数与 editing-did-began 的参数一致。
