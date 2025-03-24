
# 图集资源（Atlas）
图集（Atlas）也称作 Sprite Sheet，是游戏开发中常见的一种美术资源。图集是通过专门的工具将多张图片合并成一张大图，并通过 plist 等格式的文件索引的资源。可供 Cocos Creator 使用的图集资源由 plist 和 png 文件组成。下面就是一张图集使用的图片文件：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/sheep_atlas.1UTMiepg.png)


## 1.为什么要使用图集资源

在游戏中使用多张图片合成的图集作为美术资源，有以下优势：

1. 合成图集时会去除每张图片周围的空白区域，加上可以在整体上实施各种优化算法，合成图集后可以大大减少游戏包体和内存占用
2. 多个 Sprite 如果渲染的是来自同一张图集的图片时，这些 Sprite 可以使用同一个渲染批次来处理，大大减少 CPU 的运算时间，提高运行效率。

## 2.制作图集资源
要生成图集，首先您应该准备好一组原始图片：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/single_sheep.CqRfoeXv.png)

接下来可以使用专门的软件生成图集，我们推荐的图集制作软件包括：

![alt text](https://www.codeandweb.com/texturepacker)

使用这些软件生成图集时请选择 cocos2d-x 格式的 plist 文件。最终得到的图集文件是同名的 plist 和 png。


