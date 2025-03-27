
# 获取和设置资源

## 1.资源属性的声明
在 Creator 中，所有继承自 cc.Asset 的类型都统称资源，如 cc.Texture2D、cc.SpriteFrame、cc.AnimationClip、cc.Prefab 等。它们的加载是统一并且自动化的，相互依赖的资源能够被自动预加载。

> 例如，当引擎在加载场景时，会先自动加载场景关联到的资源，这些资源如果再关联其它资源，其它也会被先被加载，等加载全部完成后，场景加载才会结束。

脚本中可以这样定义一个 Asset 属性：

```js
// NewScript.js

cc.Class({
    extends: cc.Component,
    properties: {

        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },

    }
});
```

## 2.在属性检查器中设置资源
只要在脚本中定义好类型，就能直接在 属性检查器 中很方便地设置资源。假设我们创建了这样一个脚本：

```js
// NewScript.js

cc.Class({
    extends: cc.Component,
    properties: {

        texture: {
            default: null,
            type: cc.Texture2D,
        },
        spriteFrame: {
            default: null,
            type: cc.SpriteFrame,
        },

    }
});
```

将它添加到节点后，在 属性检查器 中是这样的：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/asset-in-inspector-null.Bl8cByHk.png)

接下来我们从 资源管理器 里面分别将一张 Texture 和一个 SpriteFrame 拖到 属性检查器 的对应属性中：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/asset-in-inspector-dnd.KfSniE0w.png)

结果如下：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/asset-in-inspector.BWwiGfB7.png)


这样就能在脚本里直接拿到设置好的资源：
```js
onLoad: function () {
    var spriteFrame = this.spriteFrame;
    var texture = this.texture;

    spriteFrame.setTexture(texture);
}
```
