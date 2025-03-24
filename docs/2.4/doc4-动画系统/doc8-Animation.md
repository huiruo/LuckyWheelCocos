
# Animation
Animation（动画） 组件可以以动画方式驱动所在节点和子节点上的节点和组件属性，包括用户自定义脚本中的属性。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/animation.B7fBVp7_.png)

点击 属性检查器 下面的 添加组件 按钮，然后从 其他组件 中选择 Animation，即可添加 Animation（动画） 组件到节点上。

## 1.Animation 属性
1. Default Clip	默认的动画剪辑，如果这一项设置了值，并且 Play On Load 也为true，那么动画会在加载完成后自动播放 Default Clip 的内容
2. Clips	列表类型，默认为空，在这里面添加的 AnimationClip 会反映到 动画编辑器 中，用户可以在 动画编辑器 里编辑 Clips 的内容
3. Play On Load	布尔类型，是否在动画加载完成后自动播放 Default Clip 的内容

## 2. 详细说明
如果一个动画需要包含多个节点，那么一般会新建一个节点来作为动画的 根节点，将 Animation（动画） 组件添加到这个 根节点 上，然后这个根节点下的其他子节点都会自动进入到这个动画中。

假如添加了如下所示的节点树：
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/animation-hierarchy.BJT8RG6C.png)

那么在动画编辑器中的层级就会显示为：
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/animation-editor-hierarchy.DMwDjfex.png)

