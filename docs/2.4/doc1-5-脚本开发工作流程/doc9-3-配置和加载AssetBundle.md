# 配置和加载 Asset Bundle

随着游戏玩法越来越丰富，游戏中的资源数量越来越多，开发者对于拆分包体的需求也越来越强烈。所以从 v2.4 开始，Cocos Creator 推出了 Asset Bundle 功能，支持 代码、资源 和 场景 的分包加载。

开发者可将项目中的部分场景、资源、代码等内容划分到不同的 Asset Bundle 中，这些 Asset Bundle 不会在游戏启动时加载，而是由开发者在游戏过程中手动调用 loadBundle 进行加载，从而有效降低游戏启动的时间，尽可能做到按需加载。

关于 Asset Bundle 的更多介绍，请参考 Asset Bundle。

```
https://docs.cocos.com/creator/2.4/manual/zh/asset-manager/bundle.html
```

## 配置方法
Asset Bundle 是以 文件夹 为单位进行配置的。当我们在 资源管理器 中选中一个文件夹时，属性检查器 中就会出现一个 配置为 Bundle 的选项，勾选后会出现如下图的配置项：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/inspector.Cgj4dj2g.png)

配置项        	 功能说明

1. Bundle 名称	Asset Bundle 构建后的名称，默认会使用这个文件夹的名字，可根据需要修改。
2. Bundle 优先级	Creator 开放了 10 个可供配置的优先级，构建时将会按照优先级 从大到小 的顺序对 Asset Bundle 依次进行构建。具体内容请参考 Asset Bundle - 优先级。
3. 目标平台	不同平台可使用不同的配置，构建时将根据对应平台的设置来构建 Asset Bundle。
4. 压缩类型	  决定 Asset Bundle 最后的输出形式，包括 默认、无压缩、合并所有 JSON、小游戏分包、Zip 5 种压缩类型。具体内容请参考 Asset Bundle - 压缩类型
5. 配置为远程包	 
    - 是否将 Asset Bundle 配置为远程包，不支持 Web 平台。
    - 若勾选了该项，则 Asset Bundle 在构建后会被放到 remote 文件夹，你需要将整个 remote 文件夹放到远程服务器上。
    - 构建 OPPO、vivo、华为等小游戏平台时，若勾选了该项，则不会将 Asset Bundle 打包到 rpk 中。

配置完成后点击右上方的 应用 按钮，这个文件夹就被配置为 Asset Bundle 了，然后在 构建发布 面板选择对应的平台进行构建。

注意：
1. Creator 有 4 个 内置 Asset Bundle，包括 resources、internal、main、start-scene，在设置 Bundle 名称 时请不要使用这四个名称。
2. 小游戏分包 只能放在本地，不能配置为远程包。所以当 压缩类型 设置为 小游戏分包 时，配置为远程包 项不可勾选。
3. Zip 压缩类型主要是为了降低网络请求数量，如果放在本地，不用网络请求，则没什么必要。所以要求与 配置为远程包 搭配使用。

## 构建
在构建时，配置为 Asset Bundle 的文件夹中的资源（包含场景、代码和其他资源）以及文件夹外的相关依赖资源都会被合并到同一个 Asset Bundle 文件夹中。比如场景 A 放在 a 文件夹中，当 a 文件夹配置为 Asset Bundle 后，场景 A 以及它所依赖的资源都会被合并到 Asset Bundle a 文件夹中。

构建完成后，这个 Asset Bundle 文件夹会被打包到对应平台发布包目录下的 assets 文件夹中。但有以下两种特殊情况：

1. 配置 Asset Bundle 时，若勾选了 配置为远程包，则这个 Asset Bundle 文件夹会被打包到对应平台发布包目录下的 remote 文件夹中。
2. 配置 Asset Bundle 时，若设置了 压缩类型 为 小游戏分包，则这个 Asset Bundle 文件夹会被打包到对应平台发布包目录下的 subpackages 文件夹中。

assets、remote、subpackages 这三个文件夹中包含的每个文件夹都是一个 Asset Bundle。

2. 配置 Asset Bundle 时，若设置了 压缩类型 为 小游戏分包，则这个 Asset Bundle 文件夹会被打包到对应平台发布包目录下的 subpackages 文件夹中。

assets、remote、subpackages 这三个文件夹中包含的每个文件夹都是一个 Asset Bundle。
