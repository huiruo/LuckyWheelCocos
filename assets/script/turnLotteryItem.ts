import { _decorator, CCInteger, Component, director, Node, tween } from "cc";
const { ccclass, property } = _decorator;

export const GoLotteryEvent = "GoLotteryEvent";
export const GetLotteryRewardRstEvent = "GetLotteryRewardRstEvent";

@ccclass("turnLotteryItem")
export class turnLotteryItem extends Component {
  @property(Node)
  turnBgNode: Node = null;

  @property(CCInteger)
  //   rewardTypeCount: number = 6; // 转盘分区个数
  rewardTypeCount: number = 9; // 转盘分区个数

  @property(CCInteger)
  rotatelotterySecs: number = 12; //转盘动画旋转次数

  @property(CCInteger)
  lotterSecs: number = 5; //抽奖动画持续时间

  private _isLottery: boolean = false; //是否在抽奖中

  start() {
    director.on(GoLotteryEvent, this.onGoLotteryEventCallback, this);
  }

  onGoLotteryEventCallback() {
    if (this._isLottery) {
      console.log(`<onGoLotteryEventCallback> 正在抽奖 请等待此轮抽奖结束`);

      return;
    }
    this._isLottery = true;

    // 随机确定奖品分区
    let index = Math.floor(Math.random() * this.rewardTypeCount);

    // 过场动作 顺时针转
    let targetAngle =
      -this.rotatelotterySecs * 360 + index * (360 / this.rewardTypeCount);
    this.turnBgNode.angle %= 360;
    console.log(
      `<onGoLotteryEvent> index: ${index} ,旋转角度： ${
        index * (360 / this.rewardTypeCount)
      }`
    );

    // 过场动作+缓入缓出
    if (this.turnBgNode) {
      let tweenAction = tween().to(
        this.lotterSecs,
        { angle: targetAngle },
        { easing: "cubicInOut" }
      );
      let tweenCallFunc = tween().call(() => {
        // HACK: 发送抽奖结果通知
        director.emit(GetLotteryRewardRstEvent, { reward: index });
        this._isLottery = false;
      });

      tween(this.turnBgNode).sequence(tweenAction, tweenCallFunc).start();
    }
  }

  update(deltaTime: number) {}

  protected onDestroy(): void {
    director.targetOff(GoLotteryEvent);
  }
}
