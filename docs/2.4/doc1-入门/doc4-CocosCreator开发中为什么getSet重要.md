
使用 get/set 可以更好地封装接口，更多使用案例可参考社区教程 CocosCreator 开发中为什么 get/set 如此重要？。
```
https://mp.weixin.qq.com/s/gS6BTdBLTLzAtIUlHbBjtA
```

## 10.GetSet 方法
在属性中设置了 get 或 set 以后，访问属性的时候，就能触发预定义的 get 或 set 方法。

### 10-1.get
在属性中设置 get 方法：
```js
properties: {
    width: {
        get: function () {
            return this.__width;
        }
    }
}
```

get 方法可以返回任意类型的值。
这个属性同样能显示在 属性检查器 中，并且可以在包括构造函数内的所有代码里直接访问。

```js
var Sprite = cc.Class({
    ctor: function () {
        this.__width = 128;
        cc.log(this.width);    // 128
    },

    properties: {
        width: {
            get: function () {
                return this.__width;
            }
        }
    }
});
```

> 注意：

1. 设定了 get 以后，这个属性就不能被序列化，也不能指定默认值，但仍然可附带除了 default、serializable 外的大部分参数。
```js
width: {
    get: function () {
        return this.__width;
    },

    type: cc.Integer,
    tooltip: "The width of sprite"
}
```

2. get 属性本身是只读的，但返回的对象并不是只读的。用户使用代码依然可以修改对象内部的属性，例如：
```js
var Sprite = cc.Class({
    ...
    position: {
        get: function () {
            return this._position;
        },
    }
    ...
});

var obj = new Sprite();
obj.position = new cc.Vec2(10, 20);   // 失败！position 是只读的！
obj.position.x = 100;                 // 允许！position 返回的 _position 对象本身可以修改！
```

### 10-2.set
在属性中设置 set 方法：
```js
width: {
    set: function (value) {
        this._width = value;
    }
}
```

set 方法接收一个传入参数，这个参数可以是任意类型。

set 一般和 get 一起使用：
```js
width: {
    get: function () {
        return this._width;
    },

    set: function (value) {
        this._width = value;
    },

    type: cc.Integer,
    tooltip: "The width of sprite"
}
```

如果没有和 get 一起定义，则 set 自身不能附带任何参数。
和 get 一样，设定了 set 以后，这个属性就不能被序列化，也不能指定默认值。