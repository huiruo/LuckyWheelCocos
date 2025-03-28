# 自动图集资源 (Auto Atlas)

自动图集资源 作为 Cocos Creator 自带的合图功能，可以将指定的一系列碎图打包成一张大图，具体作用和 Texture Packer 的功能很相近。

## 1.创建自动图集资源
在 资源管理器 中右键，可以在如下菜单中找到 新建 -> 自动图集配置 的子菜单，点击菜单将会新建一个类似 AutoAtlas.pac 的资源。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/create-auto-atlas.AOtyAbsC.png)

自动图集资源 将会以当前文件夹下的所有 SpriteFrame 作为碎图资源，以后会增加其他的选择碎图资源的方式。如果碎图资源 SpriteFrame 有配置过，在打包后重新生成的 SpriteFrame 中将会保留这些配置。

## 2.配置自动图集资源
在资源管理器中选中一个 自动图集资源 后，属性检查器 面板将会显示 自动图集资源 的所有可配置项。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/auto_atlas.CXw0Y_1D.png)

### 2-1.属性

1. 最大宽度	单张图集最大宽度
2. 最大高度	单张图集最大高度
3. 间距	图集中碎图之间的间距
4. 允许旋转	是否允许旋转碎图
5. 输出大小为正方形	是否强制将图集长宽大小设置成正方形
6. 输出大小为二次幂	是否将图集长宽大小设置为二次方倍数
7. 算法	图集打包策略，可选的策略有 `[BestShortSideFit、BestLongSideFit、BestAreaFit、BottomLeftRule、ContactPointRule] `
8. 扩边	在碎图的边框外扩展出一像素外框，并复制相邻碎图像素到外框中。该功能也称作 “Extrude”。
9. 不包含未被引用资源	在预览中，此选项不会生效，构建后此选项才会生效

Texture 部分的 Premultiply Alpha、Filter Mode、Packable 参数的设置，请参考文档 Texture 属性。纹理格式的设置请参考文档 压缩纹理。

配置完成后，如需预览，请点击 预览 按钮来预览打包的结果，结果将会展示在 属性检查器 下面的区域。

结果分为：
1. Packed Textures：显示打包后的图集图片以及图片相关的信息，如果会生成的图片有多张，则会往下在 属性检查器 中列出来。
2. Unpacked Textures：显示不能打包进图集的碎图资源，造成的原因有可能是这些碎图资源的大小比图集资源的大小还大导致的，这时候可能需要调整下图集的配置或者碎图的大小了。

## 3.生成图集
预览项目或者在 Cocos Creator 中使用碎图的时候都是直接使用的碎图资源，在 构建项目 这一步才会真正生成图集到项目中。

注意：如果碎图开启了 Alpha 预乘，那么在生成图集时会失效。若需要使用预乘功能，可在图集上勾选 Premultiply Alpha。
