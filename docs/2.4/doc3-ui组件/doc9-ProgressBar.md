
# ProgressBar
https://docs.cocos.com/creator/2.4/manual/zh/components/progress.html

ProgressBar（进度条）经常被用于在游戏中显示某个操作的进度，在节点上添加 ProgressBar 组件，然后给该组件关联一个 Bar Sprite 就可以在场景中控制 Bar Sprite 来显示进度了。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/add-progressbar.nZl6_v0V.png)

点击 属性检查器 下面的 添加组件 按钮，然后从 UI 组件 中选择 ProgressBar，即可添加 ProgressBar 组件到节点上。

## 2.ProgressBar 属性
1. Bar Sprite	进度条渲染所需要的 Sprite 组件，可以通过拖拽一个带有 Sprite 组件的节点到该属性上来建立关联。
2. Mode 支持 HORIZONTAL（水平）、VERTICAL（垂直）和 FILLED（填充）三种模式，可以通过配合 reverse 属性来改变起始方向。
3. Total Length	当进度条为 100% 时 Bar Sprite 的总长度/总宽度。在 FILLED 模式下 Total Length 表示取 Bar Sprite 总显示范围的百分比，取值范围从 0 ~ 1。
4. Progress	浮点，取值范围是 0~1，不允许输入该范围之外的数值。
5. Reverse	布尔值，默认的填充方向是从左至右/从下到上，开启后变成从右到左/从上到下。


