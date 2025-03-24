# 管线与任务
为了更方便地修改或者扩展引擎资源加载流程，Asset Manager 底层使用了名为 管线与任务 和 下载与解析 的机制对资源进行加载，本篇内容主要介绍 管线与任务。

虽然在 v2.4 之前的 cc.loader 已经开始使用管线的概念来进行资源加载，但是在 Asset Manager 中，我们对管线进行了重构，使得逻辑更加清晰，也更容易扩展。开发者可以扩展现有管线，也可以使用引擎提供的类 cc.AssetManager.Pipeline 来自定义管线。


## 1.管线
管线 可以理解为一系列过程的串联组合，当一个请求经过管线时，会被管线的各个阶段依次进行处理，最后输出处理后的结果。如下图所示：

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/pipeline.Dtju4k38.png)

管线与一般的固定流程相比，优势在于管线中的所有环节都是可拼接和组合的，这意味着开发者可以在现有管线的任意环节插入新的阶段或者移除旧的阶段，极大地增强了灵活性和可扩展性。

## 2.内置管线
Asset Manager 中内置了三条管线：
1. 第一条管线用于转换资源路径，找到真实资源路径。
2. 第二条管线用于正常加载。
3. 第三条管线用于预加载。

![alt text](https://docs.cocos.com/creator/2.4/manual/assets/builtin-pipeline.7qNgV8LU.jpg)

注意：第二条管线用到了下载器和解析器，第三条管线则用到了下载器，具体内容可参考 下载与解析。

## 3.自定义管线
开发者可以对内置管线进行自定义扩展以实现自己的定制需求：

```js
cc.assetManager.pipeline.insert(function (task, done) {
    task.output = task.input; 
    for (var i = 0; i < task.input; i++) {
        console.log(task.input[i].content);
    }
    done();
}, 1);
```

也可以构建一条新的管线：
```js
var pipeline = new cc.AssetManager.Pipeline('test', [(task, done) => {
    console.log('first step');
    done();
}, (task, done) => {
    console.log('second step');
    done();
}]);
```

构建管线需要一系列方法，每个方法需要传入一个任务参数和一个完成回调参数。开发者可以在方法中访问任务的所有内容，在完成时调用完成回调即可。

## 4.任务
任务 就是在管线中流动的请求，一个任务中包括输入、输出、完成回调、可选参数 等内容。

当任务在管线中流动时，管线的各个阶段会取出任务的输入，做出一定的处理后存回到输出中。
```js
cc.assetManager.pipeline.insert(function (task, done) {
    for (var i = 0; i < task.input.length; i++) {
        task.input[i].content = null;
    }
    task.output = task.input;
    done();
}, 1);
```

具体内容可参考 cc.AssetManager.Task 类型。
