import GameController from "./GameController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    private gameController: GameController = null;

    onLoad() {
        this.gameController = new GameController();
    }

    start () {
        this.label.string = "这是游戏场景";

        this.gameController.Start();
    }

    // update (dt) {}
}
