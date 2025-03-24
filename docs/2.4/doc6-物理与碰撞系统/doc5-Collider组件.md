
# Collider组件
点击 属性检查器 下面的 添加组件 按钮，然后从 碰撞组件 中选择需要的 Collider 组件，即可添加 Collider 组件到节点上。

Collider 组件属性
1. Tag 标签。当一个节点上有多个碰撞组件时，在发生碰撞后，可以使用此标签来判断是节点上的哪个碰撞组件被碰撞了。
2. Editing	是否编辑此碰撞组件，只在编辑器中有效

## 1.Polygon（多边形）碰撞组件属性
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/polygon.BOSDMbt7.png)

1. Regenerate Points	根据组件所在节点上的 Sprite 组件的贴图像素点来自动生成相应轮廓的顶点。
2. Threshold	指明生成贴图轮廓顶点间的最小距离，值越大则生成的点越少，可根据需求进行调节。
3. Offset	 组件相对于节点的 偏移量。
4. Points	组件的 顶点数组。

## 2.Circle（圆形）碰撞组件属性
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/circle.BX1vsip1.png)

1. Offset 组件相对于节点的 偏移量。
2. Radius 组件的 半径。

## 3.Box（矩形）碰撞组件属性
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/box.dgiLmxWr.png)

- Offset 组件相对于节点的 偏移量。
- Size 组件的 长宽。


