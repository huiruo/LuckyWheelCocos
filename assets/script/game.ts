import {
  _decorator,
  Button,
  Component,
  director,
  Label,
  Node,
  Sprite,
} from "cc";
import { GetLotteryRewardRstEvent, GoLotteryEvent } from "./turnLotteryItem";
const { ccclass, property } = _decorator;

@ccclass("game")
export class game extends Component {
  @property(Sprite)
  protected testsp: Sprite = null;

  @property(Label)
  tipsLabel: Label = null;

  onClickStartLotteryBtnEvent() {
    if (this.tipsLabel) {
      this.tipsLabel.string = "等待抽奖结果!!!";
      //   this.tipsLabel.string = "开始抽奖!!!";
    }

    director.emit(GoLotteryEvent, this);
  }

  start() {
    // HACK: 接受抽奖结果通知
    director.on(
      GetLotteryRewardRstEvent,
      this.onGetLotteryRewardRstEventCallback,
      this
    );

    // if (this.tipsLabel) {
    //   this.tipsLabel.string = "等待抽奖结果";
    // }
  }

  // 抽奖结果回调
  onGetLotteryRewardRstEventCallback(data: any) {
    if (!data) {
      return;
    }

    let rewardIndex: number = data.reward as number;
    let tipsString = "恭喜获得";

    console.log("%c=rewardIndex", "color:red", rewardIndex);

    if (rewardIndex == 0) {
      tipsString += "特等奖";
    } else if (rewardIndex == 1) {
      tipsString += "1等奖";
    } else if (rewardIndex == 2) {
      tipsString += "2等奖";
    } else if (rewardIndex == 3) {
      tipsString += "3等奖";
    } else if (rewardIndex == 4) {
      tipsString += "4等奖";
    } else if (rewardIndex == 5) {
      tipsString += "5等奖";
    } else if (rewardIndex == 6) {
      tipsString += "6等奖";
    } else if (rewardIndex == 7) {
      tipsString += "等奖";
    } else if (rewardIndex == 8) {
      tipsString += "8等奖";
    }

    if (this.tipsLabel) {
      this.tipsLabel.string = tipsString;
    }
  }

  update(deltaTime: number) {}

  protected onDestroy(): void {
    // 销毁事件
    director.targetOff(GetLotteryRewardRstEvent);
  }
}
