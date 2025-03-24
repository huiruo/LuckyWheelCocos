# doc4-预制资源 Prefab
预制资源（Prefab）是预先配置好的游戏对象，可作为我们动态生成节点时使用的模板。

## 1. 创建预制
在场景中编辑好节点后，直接将节点从 层级管理器 拖到 资源管理器：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/create.DpXEPp9y.png)

即可创建一个 预制资源：
<br/>

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/created.BA5kyzKT.png)

## 2.编辑预制
在 资源管理器 中双击预制资源，可将 场景编辑器 的场景编辑模式切换为预制编辑模式。

此时可以在编辑器中编辑预制资源，编辑完成之后，点击 场景编辑器 上方的 保存 按钮即可保存编辑后的预制资源，然后点击 关闭 按钮即可退出预制编辑模式，返回场景编辑模式。

注意：请尽量避免多人同时修改同一个预制，否则可能会导致冲突，且无法通过 git 合并解决冲突。

## 3. 注意：请尽量避免多人同时修改同一个预制，否则可能会导致冲突，且无法通过 git 合并解决冲突。

将预制资源从 资源管理器 拖拽到 层级管理器 或 场景编辑器，即可在场景中生成一个 预制实例，预制实例节点在 层级管理器 中显示为蓝色。

如果对场景中预制实例的各项属性进行修改，然后保存场景，修改的数据会被存储在该预制实例中，不会影响到 资源管理器 中的预制资源，以及使用预制资源生成的其他预制实例的数据。

## 4. 预制实例
在 层级管理器/场景编辑器 中选中预制实例节点，属性检查器 面板顶部便会出现几个可操作的按钮：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/edit-in-scene.DhnmBzTb.png)

1. 选择：点击该按钮即可在 资源管理器 中黄色高亮生成该预制实例的预制资源。

2. 回退：若修改了预制实例，点击 回退 按钮，即可将预制实例还原为初始预制资源的状态。
  - 注意：回退操作对 节点激活状态、节点名称、Position、Rotation 的修改无效。

3. 保存：在场景中修改了预制实例后，在 属性检查器 中直接点击 保存，即可将修改同步到生成该预制实例的预制资源中。

## 4. 自动同步和手动同步
当预制实例对应的原始预制资源被修改后，每个场景中的预制实例都可以选择要自动同步还是手动同步预制资源。选中预制实例后，点击

![alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAIAAAAmdTLBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGoSURBVDiNY3R1dWWgADBRonnY6ucUkRPUtGFi5WBgYGDh4GEXkMClnwVTSNwsUMzEl5GRUdzE796GLmYOHnYB8Z8fXgrpOHy6e+bP98/47BdQNRc19HhzftvNpRUMDAxKAWWsXHwMDAySlsG/P79F04xFPzu/2L/fP97dOPrzw8v7W/p/vH/GI6//9dmt97dPfn54CdOxzMrKysj8/3//CKhZ8Eipf7p/7veXdx9unfj88BKHiCwjExMLJz8TC+vfn9/w2f/t5b2H26eyCYjJumXABXlldWSdU/7++PLr02sC9jMwMPz+8vbbi7sMTExfn92EiPz5+kFQ01pAzeLzg4t/f33Dp59P0UBA3ZKZjfPt5b2sPEK8crp/vn38/eXd54eXBTWt2QUlPt49i8/9n+5feHlyAwsXv4CaBbe0upRdtIJ3AQsHz/+/fxj+MzCxsKOpZ8TMfxIWQV+f3/n/7x8DA8P/P7/kvXL+/f7BxML+78/P+5v6fn54QcD/X55c//XxJRufMAPD/6/Pbn55co1TWObX57dP9sxF04zdfpLA4Mx/9NMPAFPkqQkFPLPHAAAAAElFTkSuQmCC)

按钮即可切换手动/自动同步，默认为手动同步。

1. 设为 手动同步 时，预制实例不会自动和原始预制资源同步更新。若需要同步更新，手动点击右上方的 回退 按钮即可。且该预制实例节点在 层级管理器 中显示为蓝色。
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/non-syncable.DJSnZFF_.png)

2. 设为 自动同步 时，预制实例会自动和原始预制资源保持同步，且该预制实例节点在 层级管理器 中显示为绿色。
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/auto-syncable.CCDS62gU.png)

## 5. 关联节点到预制
同时选中场景中的一个节点和 资源管理器 中的一个预制资源，然后点击顶部菜单栏中的 节点 -> 关联节点到预制 即可关联选中的节点和预制资源。

## 6. 预制的选项
在 资源管理器 中选中任一预制资源，便可在 属性检查器 中设置其 优化策略、延迟加载资源 和 只读，设置完成后需要点击右上方的 应用 按钮以生效。

## 7. 设置优化策略
优化策略能优化所选预制资源的实例化时间，也就是执行 cc.instantiate 所需的时间。可设置的项包括 自动调整（默认）、优化单次创建性能 和 优化多次创建性能。

1. 如果设置为 自动调整，引擎会根据创建次数自动调整优化策略。初次创建预制实例时，等同于 优化单次创建性能，多次创建后将自动 优化多次创建性能。

2. 如果这个预制需要反复执行 cc.instantiate，请选择 优化多次创建性能，否则保持默认的 自动调整 即可。
