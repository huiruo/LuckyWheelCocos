要实现完美的多分辨率适配效果，UI 元素按照设计分辨率中规定的位置呈现是不够的，当屏幕宽度和高度发生变化时，UI 元素要能够智能感知屏幕边界的位置，才能保证出现在屏幕可见范围内，并且分布在合适的位置。我们通过 Widget（对齐挂件） 来实现这种效果。

## 1.需要贴边对齐的按钮和小元素
对于暂停菜单、游戏金币这一类面积较小的元素，通常只需要贴着屏幕边对齐就可以了。这时只要几个简单的步骤：

1. 把这些元素在 层级管理器 中设为 Canvas 节点的子节点

2. 在元素节点上添加 Widget 组件

3. 以对齐左下角为例，开启 Left 和 Bottom 的对齐。

4. 然后设置好节点和屏幕边缘的距离，下图中左边距设为 50px，下边距设为 30px。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/align-basic.BhYsxtl1.png)


这样设置好 Widget 组件后，不管实际屏幕分辨率是多少，这个节点元素都会保持在屏幕左下角，而且节点约束框左边和屏幕左边距离保持 50px，节点约束框下边和屏幕下边距离保持 30px。

> 注意：Widget 组件提供的对齐距离是参照子节点和父节点相同方向的约束框边界的。比如上面例子里选择了 Left 对齐左边，那么子节点约束框左边和父节点，约束框左边的距离就是我们设置的 50px。其中父节点也就是 Canvas 节点，约束框永远等于屏幕大小，前提是在编辑器顶部菜单栏中的 项目 -> 项目设置 -> 项目预览 中只勾选 适配屏幕宽度 或者 适配屏幕高度。


## 2.嵌套对齐元素
上面介绍了对齐屏幕边缘的做法，由于 Widget 默认的对齐参照物是父节点，所以我们也可以添加不同的节点层级，并且让每一级节点都使用自动对齐的功能。

