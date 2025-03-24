# 下载与解析
Asset Manager 底层使用了多条加载管线来加载和解析资源，每条管线中都使用了 downloader 和 parser 模块，也就是下载器和解析器。开发者可以通过 cc.assetManager.downloader 和 cc.assetManager.parser 来访问。

## 1.下载器

下载器是一个全局单例，包括 下载重试、下载优先级排序 和 下载并发数限制 等功能。

## 2.下载重试
下载器如果下载资源失败，会自动重试下载，开发者可以通过 maxRetryCount 和 retryInterval 属性来设置重试下载的相关参数。

- maxRetryCount 属性用于设置重试下载的最大次数，默认 3 次。若不需要重试下载，可设置为 0，则下载失败时会立即返回错误。
```js
cc.assetManager.downloader.maxRetryCount = 0;
```

- retryInterval 属性用于设置重试下载的间隔时间，默认 2000 ms。若设置为 4000 ms，则下载失败时会先等待 4000 ms，然后再重新下载。
```js
cc.assetManager.downloader.retryInterval = 4000;
```

## 3.下载优先级
Creator 开放了四个下载优先级，下载器将会按照优先级 从大到小 的顺序来下载资源。

1. 脚本或 Asset Bundle	优先级最高 2
2. 场景资源	包括场景中的所有资源，确保场景能够快速加载 1
3. 开发者手动加载的资源	优先级0
4. 预加载资源	优先级最低，因为预加载更多是提前加载资源，时间要求相对较为宽松 -1


