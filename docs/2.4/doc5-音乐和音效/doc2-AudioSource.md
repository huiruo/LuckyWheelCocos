
# AudioSource
![alt text](https://docs.cocos.com/creator/2.4/manual/assets/audiosource.B5eIr16R.png)


属性:
1. Clip 用来播放的音频资源对象
2. Volume	音量大小，范围在 0~1 之间
3. Mute 是否静音
4. Loop 是否循环播放
5. Play on load	 是否在组件激活后自动播放音频
6. 是否在未播放的时候预先加载

## 关于自动播放的问题
一些移动端的浏览器或 WebView 不允许自动播放音频，用户需要在触摸事件中手动播放音频。

```js
cc.Class({
    extends: cc.Component,
    properties: {
       audioSource: cc.AudioSource
    },

    start () {
       let canvas = cc.find('Canvas');
       canvas.on('touchstart', this.playAudio, this);
    },
    
    playAudio () {
      this.audioSource.play();
    }
});
```