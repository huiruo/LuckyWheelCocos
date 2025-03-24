
# 编辑碰撞组件
当添加了一个碰撞组件后，可以通过点击 inspector 中的 editing 来开启碰撞组件的编辑，如下图。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/editing.5RUmYAOG.png)

## 1.多边形碰撞组件
如果编辑的是 多边形碰撞组件 的话，则会出现类似下图所示的 多边形编辑区域。区域中的这些点都是可以拖动的，拖动的结果会反映到 多边形碰撞组件 的 points 属性中。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/edit-polygon-collider.CtiRt7rU.png)

当鼠标移动到两点连成的线段上时，鼠标指针会变成 添加 样式，这时点击鼠标左键会在这个地方添加一个点到 多边形碰撞组件 中。

当按住 ctrl 或者 command 键时，移动鼠标到多边形顶点上，会发现顶点以及连接的两条线条变成红色，这时候点击鼠标左键将会删除 多边形碰撞组件 中的这个点。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/delete-polygon-point.ca2_4rAr.png)

在 CocosCreator 1.5 中，多边形碰撞组件中添加了一个 Regenerate Points 的功能，这个功能可以根据组件依附的节点上的 Sprite 组件的贴图的像素点来自动生成相应轮廓的顶点。

Threshold 指明生成贴图轮廓顶点间的最小距离，值越大则生成的点越少，可根据需求进行调节。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/regenerate-points.OuKj803j.png)


## 2.圆形碰撞组件
如果编辑的是 圆形碰撞组件 的话，则会出现类似下图所示的 圆形编辑区域：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/edit-circle-collider.Bp_TKXfA.png)

当鼠标悬浮在 圆形编辑区域 的边缘线上时，边缘线会变亮，这时点击鼠标左键拖动将可以修改 圆形碰撞组件 的半径大小。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/hover-circle-edge.Bb1L9Fux.png)

## 3.矩形碰撞组件
如果编辑的是 矩形碰撞组件 的话，则会出现类似下图所示的 矩形编辑区域：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/edit-box-collider.CJL5yfoa.png)

当鼠标悬浮在 矩形碰撞区域 的顶点上时，点击鼠标左键拖拽可以同时修改 矩形碰撞组件 的长宽；
当鼠标悬浮在 矩形碰撞区域 的边缘线上时，点击鼠标左键拖拽将修改 矩形碰撞组件 的长或宽中的一个方向。

按住 Shift 键拖拽时，在拖拽过程中将会保持按下鼠标那一刻的 长宽比例；
按住 Alt 建拖拽时，在拖拽过程中将会保持 矩形中心点位置 不变。

## 4.修改碰撞组件偏移量
在所有的碰撞组件编辑中，都可以在各自的 碰撞中心区域 点击鼠标左键拖拽来快速编辑碰撞组件的 偏移量。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/drag-area.I_YH4jo4.png)
