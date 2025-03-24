# 艺术数字资源 (LabelAtlas)

艺术数字资源 是一种用户自定义的资源，它可以用来配置艺术数字字体的属性。

## 1.创建艺术数字资源
在 资源管理器 的文件夹中点击右键或者点击左上方的加号按钮，然后选择 新建 -> 艺术数字配置，将会新建一个 LabelAtlas.labelatlas 的资源。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/create-label-atlas.DLRdvQ8m.jpeg)

艺术数字资源 在使用之前需要进行一些配置，比如关联事先绘制好的包含所需字体样式的图片，如下图所示：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/raw_texture_file.BlwoXjyQ.png)

## 2.配置艺术数字资源
在 资源管理器 中选中一个 艺术数字资源 后，属性检查器 面板将会显示 艺术数字资源 的所有可配置项。

1. Raw Texture File	设置事先绘制好的包含所需字体样式的图片
2. Item Width	指定每一个字符的宽度
3. Item Height	指定每一个字符的高度
4. Start Char	指定艺术数字字体里面的第一个字符，如果字符是 Space，也需要在这个属性里面输入空格字符

配置完成后点击右上方的 应用 按钮来保存设置。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/save-label-atlas.BBfZVplq.jpeg)

## 3.使用艺术数字资源
使用艺术数字资源非常简单，你只需要新建一个 Label 组件，然后将新建好的艺术数字资源拖拽到节点的 Label 组件的 Font 属性上即可。可参考 Label 组件。
