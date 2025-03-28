# 资源工作流程

## 常见资源工作流程
接下来我们会介绍 Cocos Creator 中主要资源类型和相关工作流程：

1. 场景资源
2. 图像资源
3. 图集资源（Atlas）
4. 自动图集资源（Auto Atlas）
4. 图像资源的自动剪裁
5. 压缩纹理
6. 预制资源（Prefab）
7. 脚本资源
8. 字体资源
9. 粒子资源
10. 声音资源
11. 骨骼动画资源（Spine）
12. 瓦片图资源（TiledMap）
13. 骨骼动画资源（DragonBones）
14. JSON 资源
15. 文本资源

## 1.添加资源
资源管理器 提供了三种在项目中添加资源的方式：

1. 通过 创建按钮 添加资源
2. 在操作系统的文件管理器中，将资源文件复制到项目资源文件夹下，之后再打开或激活 Cocos Creator 窗口，完成资源导入。
3. 从操作系统的文件管理器中（比如 Windows 的文件资源管理器或 Mac 的 Finder），拖拽资源文件到 资源管理器 面板来导入资源

## 2.从外部导入资源
从操作系统中的其他窗口拖拽文件到 Cocos Creator 窗口中的 资源管理器 面板上，就能够从外部导入资源。该操作会自动复制资源文件到项目资源文件夹下，并完成导入操作。

## 3.导入和同步资源
资源管理器 中的资源和操作系统的文件管理器中看到的项目资源文件夹是同步的，在 资源管理器 中对资源的移动、重命名和删除，都会直接在用户的文件系统中对资源文件进行同步修改。同样的，在文件系统中（如 Windows 上的 Explorer 或 Mac 上的 Finder）对添加或删除资源，再次打开或激活 Cocos Creator 程序后，也会对 资源管理器 中的资源进行更新。

## 4.管理资源配置文件（.meta）
所有 assets 路径下的资源都会在导入时生成一份 资源配置文件（.meta） 这份配置文件提供了该资源在项目中的唯一标识（uuid）以及其他的一些配置信息（如图集中的小图引用，贴图资源的裁剪数据等），非常重要。

在编辑器中管理资源时，meta 文件是不可见的，对资源的任意删除、改名、移动操作，都会由编辑器自动同步相应的 meta 文件，确保 uuid 的引用不会丢失和错乱。

注意在编辑器外部的文件系统中（Explorer，Finder）对资源文件进行删除、改名、移动时必须同步处理相应的 meta 文件。资源文件和其对应的 meta 文件应该保持在同一个目录下，而且文件名相同。

## 5.处理无法匹配的资源配置文件（.meta）
如果您在编辑器外部的文件系统（Explorer，Finder等）中进行了资源文件的移动或重命名，而没有同步移动或重命名 meta 文件时，会导致编辑器将改名或移动的资源当做新的资源导入，可能会出现场景和组件中对该资源（包括脚本）的引用丢失。

在编辑器发现有未同步的资源配置文件时，会弹窗警告用户，并列出所有不匹配的 meta 文件。

这时无法正确匹配的资源配置文件会从项目资源路径（asset）中移除，并自动备份到 temp 路径下。

如果您希望恢复这些资源的引用，请将备份的 meta 文件复制到已经移动过的资源文件同一路径下，并保证资源文件和 meta 文件的文件名相同。注意编辑器在处理资源改名和移动时会生成新的 meta 文件，这些新生成的 meta 文件可以在恢复备份的 meta 后安全删除。

## 6.跨项目导入导出资源
除了导入基础资源外，从 1.5 版本开始编辑器支持将一个项目中的资源和其依赖完整的导出到另一个项目，详情请阅读 导入导出资源工作流程。


