## 高级设置
Box2D 提供了非常多的参数来改变物理运行状态，除了 RigidBody、Collider、Joint、World 之外，还有一些属于 Box2D 内部宏的参数。这些宏的参数可以在 box2d.js（Web 平台） / Box2D/Common/b2Settings.h（Native 平台） 文件开头找到。

每个物理游戏需要的参数都可能是不同的，不同的情况会需要不同的参数配置。下面会介绍一些宏参数，在某些情况下调整这些宏参数能得到更好的物理模拟效果。

